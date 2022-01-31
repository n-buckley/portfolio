import { Projects } from '../../../data/ProjectData';
import FeaturedCard from '../../FeaturedCard/FeaturedCard';
import './project.css';

function ProjectPage() {
    return (
        <div className='p-page'>
            <div className='p-titles__wrapper'>
                <div className='p-title'>
                    <h2>Projects</h2>
                </div>
                <div className='p-title'>
                    <h1>Things I've done.</h1>
                </div>
            </div>
            <div className='featured__wrapper'>
                {Projects.map(project => {return <FeaturedCard key={project.id} project={project}/>})}
            </div>
        </div>
    );
}

export default ProjectPage;