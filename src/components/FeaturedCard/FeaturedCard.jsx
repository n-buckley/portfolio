import './featured.css';

function FeaturedCard(props) {
    return (
        <div className='feat-card'>
            <div className='feat-card__prev'>
                <div className='prev__img' />
            </div>
            <div className='feat-card__content'>
                <div className='content__text'>
                    <div>
                        <h2>{props.project.title}</h2>
                    </div>
                    <div>
                        <p>{props.project.desc} </p>
                    </div>
                </div>
                <div className='content__tech'>
                    <div className='tech__item'>
                        <p>React</p>
                    </div>
                    <div className='tech__item'>
                        <p>CSS</p>
                    </div>
                    <div className='tech__item'>
                        <p>HTML</p>
                    </div>
                </div>
                <div className='content__links'>
                    <div className='links__item'>
                        <a href='https://www.github.com' target="__blank" rel="noreferrer noopener">
                            Git
                        </a>
                    </div>
                    <div className='links__item'>
                        <a href='https://www.google.com' target="__blank" rel="noreferrer noopener">
                            Google
                        </a>
                    </div>
                    <div className='links__item' target="__blank" rel="noreferrer noopener">
                        <a href='https://www.devpost.com'>
                            DevPost
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedCard