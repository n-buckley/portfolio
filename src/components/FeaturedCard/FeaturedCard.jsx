import './featured.css';

function FeaturedCard() {
    return (
        <div className='feat-card'>
            <div className='feat-card__prev'>
                <div className='prev__img' />
            </div>
            <div className='feat-card__content'>
                <div className='content__text'>
                    <div>
                        <h2>Title</h2>
                    </div>
                    <div>
                        <p>I blurb sentence here and her is where a blub about me would 
                            go about what I professionaly enjoy doing! and other things 
                            that I like doing and intersection of this </p>
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
                        <a href='github.com'>
                            Git
                        </a>
                    </div>
                    <div className='links__item'>
                        <a href='google.com'>
                            Google
                        </a>
                    </div>
                    <div className='links__item'>
                        <a href='devpost.com'>
                            DevPost
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedCard