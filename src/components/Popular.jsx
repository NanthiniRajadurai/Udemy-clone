import c1 from '../assets/Images/c1.jpg';
import c2 from '../assets/Images/c2.jpg';
import c3 from '../assets/Images/c3.jpg';
import c4 from '../assets/Images/c4.jpg';

function Popular(){
    return(
        <div class="popular">
            <h1 class="popular__title">Most Popular</h1>
            <p class="popular__subtitle">Pick the best</p>
            <div class="popular__container">
                <div class="course-card">
                    <img src={c1} alt="" />
                        <h3>2026 Python Data Visualization Masterclass</h3>
                        <p>Nanthini</p>
                        <p>4.9 ⭐⭐⭐⭐</p>
                        <p>499 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={c2} alt="" />
                        <h3>2026 Web Development Bootcamp</h3>
                        <p>Nanthini</p>
                        <p>3.9 ⭐⭐⭐</p>
                        <p>499 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={c3} alt="" />
                        <h3>Master UI/UX Designing with Figma</h3>
                        <p>Nanthini</p>
                        <p>2.9 ⭐⭐</p>
                        <p>499 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={c4} alt="" />
                        <h3>Basic to Advance Java Programming</h3>
                        <p>Nanthini</p>
                        <p>4.9 ⭐⭐⭐⭐</p>
                        <p>499 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={c3} alt="" />
                        <h3>Master UI/UX Designing with Figma</h3>
                        <p>Nanthini</p>
                        <p>2.9 ⭐⭐</p>
                        <p>499 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={c4} alt="" />
                        <h3>Basic to Advance Java Programming</h3>
                        <p>Nanthini</p>
                        <p>4.9 ⭐⭐⭐⭐</p>
                        <p>499 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={c2} alt="" />
                        <h3>Master UI/UX Designing with Figma</h3>
                        <p>Nanthini</p>
                        <p>2.9 ⭐⭐</p>
                        <p>499 <del>1999</del></p>
                </div>
                <div class="course-card">
                    <img src={c1} alt="" />
                        <h3>2026 Python Data Visualization Masterclass</h3>
                        <p>Nanthini</p>
                        <p>4.9 ⭐⭐⭐⭐</p>
                        <p>499 <del>1999</del></p>
                </div>
            </div>
        </div>
    )
}

export default Popular;