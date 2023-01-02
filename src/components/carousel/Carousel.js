export default function Carousel() {
    return (
        <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className=""
    aria-label="Slide 1"/>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
    aria-label="Slide 2" className=""/>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
    aria-label="Slide 3" className="active" aria-current="true"/>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item">
                    <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
                         xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: First slide"
                         preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#777"/>
                        <text x="50%" y="50%" fill="#555" dy=".3em">First slide</text>
                    </svg>
                </div>
                <div class="carousel-item">
                    <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
                         xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide"
                         preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#666"></rect>
                        <text x="50%" y="50%" fill="#444" dy=".3em">Second slide</text>
                    </svg>
                </div>
                <div class="carousel-item active">
                    <svg className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400"
                         xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Third slide"
                         preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#555"></rect>
                        <text x="50%" y="50%" fill="#333" dy=".3em">Third slide</text>
                    </svg>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"/>
                <span class="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"/>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}