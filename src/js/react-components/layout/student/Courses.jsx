import Card from "../../common/Card.jsx";
import Header from "../../common/Header.jsx";
function Courses() {
  return (
    <div>
      <Header />
      <h1>All Courses</h1>
      <div class="cards-container">
        <Card>
          <div class="course-unit">
             <div class="course-title">
              <h2 class="course-name">Course Name</h2>
            </div>

            <p class="course-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              eaque harum, perferendis dolore aut molestiae ullam laboriosam
              quos impedit atque quaerat mollitia beatae tempora, officia, ipsa
              quia explicabo dignissimos modi!
            </p>
          </div>
        </Card>
        <Card>
          <div class="course-unit">
            <div class="course-title">
              <h2 class="course-name">Course Name</h2>
            </div>
              <p class="course-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                eaque harum, perferendis dolore aut molestiae ullam laboriosam
                quos impedit atque quaerat mollitia beatae tempora, officia,
                ipsa quia explicabo dignissimos modi!
              </p>
          </div>
        </Card>
        <Card>
          <div class="course-unit">
            <div class="course-title">
              <h2 class="course-name">Course Name</h2>
            </div>
            <p class="course-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              eaque harum, perferendis dolore aut molestiae ullam laboriosam
              quos impedit atque quaerat mollitia beatae tempora, officia, ipsa
              quia explicabo dignissimos modi!
            </p>
          </div>
        </Card>
        <Card>
          <div class="course-unit">
            <div class="course-title">
              <h2 class="course-name">Course Name</h2>
            </div>
              <p class="course-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                eaque harum, perferendis dolore aut molestiae ullam laboriosam
                quos impedit atque quaerat mollitia beatae tempora, officia,
                ipsa quia explicabo dignissimos modi!
              </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Courses;
