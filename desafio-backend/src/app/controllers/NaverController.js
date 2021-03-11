import db from '../../database/connection';

class NaverController {
  async index(req, res) {
    const { timestamps } = req.query;

    const navers = await db.table('navers');

    if (!timestamps) {
      navers.forEach((naver) => {
        delete naver.updated_at;
        delete naver.created_at;
      });
    }

    return res.json(navers);
  }

  async show(req, res) {
    const { id } = req.params;
    const { timestamps } = req.query;

    const naverPromise = db.table('navers').select('*').where('id', id).first();

    const projectsPromise = db
      .table('projects_navers')
      .select('projects.*')
      .where('naver_id', id)
      .join('projects', 'projects.id', '=', 'projects_navers.project_id');

    // Resolve e armazena o valor retornado das Promises acima
    const [naver, projects] = await Promise.all([
      naverPromise,
      projectsPromise,
    ]);

    if (!naver) {
      return res.json({ error: 'Inexistent naver.' });
    }

    naver.projects = projects;

    if (!timestamps) {
      delete naver.updated_at;
      delete naver.created_at;
    }

    return res.json(naver);
  }

  async store(req, res) {
    const { name, birthdate, admission_date, job_role, projects } = req.body;

    const [newNaverIndex] = await db.table('navers').insert({
      name,
      birthdate,
      admission_date,
      job_role,
    });

    const navers = await db.table('navers').select('*');
    const newNaver = navers[newNaverIndex - 1];

    projects.forEach(async (project_id) => {
      await db.table('projects_navers').insert({
        naver_id: newNaver.id,
        project_id,
      });
    });

    return res.json(newNaver);
  }
}

export default new NaverController();
