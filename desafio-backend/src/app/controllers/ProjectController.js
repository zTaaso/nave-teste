import db from '../../database/connection';

class ProjectController {
  async index(req, res) {
    const { timestamps } = req.query;

    const projects = await db.table('projects');

    if (!timestamps) {
      projects.forEach((naver) => {
        delete naver.updated_at;
        delete naver.created_at;
      });
    }

    return res.json(projects);
  }

  async show(req, res) {
    const { id } = req.params;
    const { timestamps } = req.query;

    const projectPromise = db
      .table('projects')
      .select('*')
      .where('id', id)
      .first();

    const naversPromise = db
      .table('projects_navers')
      .select('navers.*')
      .where('project_id', id)
      .join('navers', 'navers.id', '=', 'projects_navers.naver_id');

    // Resolve e armazena o valor retornado das Promises acima
    const [project, navers] = await Promise.all([
      projectPromise,
      naversPromise,
    ]);

    if (!project) {
      return res.json({ error: 'Inexistent project.' });
    }

    project.navers = navers;

    if (!timestamps) {
      delete project.updated_at;
      delete project.created_at;
    }

    return res.json(project);
  }

  async store(req, res) {
    const { name, navers } = req.body;

    const [newProjectIndex] = await db.table('projects').insert({
      name,
    });

    const projects = await db.table('projects').select('*');
    const newProject = projects[newProjectIndex - 1];

    navers.forEach(async (naver_id) => {
      await db.table('projects_navers').insert({
        project_id: newProject.id,
        naver_id,
      });
    });

    return res.json(newProject);
  }
}

export default new ProjectController();
