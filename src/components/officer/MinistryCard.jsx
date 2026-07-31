export default function MinistryCard({ ministry }) {

    return (

        <a
            href={ministry.url}
            target="_blank"
            rel="noopener noreferrer"
            className="ministry-card"
        >

            <div className="ministry-icon">

                {ministry.icon}

            </div>

            <h3>

                {ministry.name}

            </h3>

            <p>

                {ministry.description}

            </p>

            <button className="ministry-button">

                Truy cập hệ thống →

            </button>

        </a>

    );

}