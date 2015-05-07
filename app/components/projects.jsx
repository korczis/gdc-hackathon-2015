import { Component } from 'react';

let Projects = class Projects extends Component {
    displayName: 'Projects'

    render() {
        const projects = this.props.projects.map(this.renderProject.bind(this));

        var form;

        if(this.props.formVisible) {
            form = (
                <form>
                  <fieldset>
                    <legend>New project</legend>
                    <label>Name
                      <input type="text" placeholder="Project name" />
                    </label>
                    <label>Link
                      <input type="text" placeholder="Project link (optional)" />
                    </label>
                    <button className="button">Submit</button>
                  </fieldset>
                </form>
            );
        }

        return (
            <div id="projects">
                <div className="row">
                    <div className="small-9 columns">
                        <h2>Projects</h2>
                        <p>Register your team for the hackathon into the table below. Please note that the registration is essential as the organisational team can supply you adequately.</p>
                        <p>Be sure to support your favorite projects by liking them!</p>
                    </div>
                </div>

                <div className="row">
                    <div className="small-12 columns">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Project name</th>
                                    <th>Link</th>
                                </tr>

                                {projects}
                            </tbody>
                        </table>
                        <p>
                            <button className="button"
                            onClick={this.props.signupHandler} id="newProject">Add your own!</button>
                        </p>

                        {form}
                    </div>
                </div>
            </div>
        );
    }

    renderProject(project) {
        return (
            <tr>
                <td><b>{project.name}</b></td>
                <td><a href={project.uri} target="_blank">{project.uri}</a></td>
            </tr>
        );
    }
};

Projects.defaultProps = {
    projects: [{
        name: 'GoodCraft',
        uri: 'https://github.com/gooddata/gdc-client',
        teammates: ['Bob Koutsky'],
        origin: 'US',
        likes: 23
    }, {
        name: 'GoodCraft 2',
        uri: 'https://github.com/gooddata/gdc-client',
        teammates: ['Bob Koutsky'],
        origin: 'US',
        likes: 23
    },{
        name: 'GoodCraft',
        uri: 'https://github.com/gooddata/gdc-client',
        teammates: ['Bob Koutsky'],
        origin: 'US',
        likes: 23
    }, {
        name: 'GoodCraft 2',
        uri: 'https://github.com/gooddata/gdc-client',
        teammates: ['Bob Koutsky'],
        origin: 'US',
        likes: 23
    }]
};

export default Projects;
