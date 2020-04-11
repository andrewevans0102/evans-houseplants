const About = ({ plants }) => (
    <div className="about">
        <div className="about__plants">
            {plants.map((plant) => (
                <div className="about__entry" key={plant.plantNumber}>
                    <div key={plant.name} className="about__image">
                        <div className="about__image--container">
                            <img
                                className="about__image--show"
                                src={plant.image}
                            />
                        </div>
                    </div>
                    <div className="about__details">
                        <div className="about__name">{plant.name}</div>
                        <div className="about__description">
                            {plant.description}{' '}
                            <a href={plant.source}>(source)</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default About;
