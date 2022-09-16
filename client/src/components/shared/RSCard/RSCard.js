import "./RSCard.css";
import career_adv from "../../../images/career_advisory.png";
import compare_sch from "../../../images/compare_schools.png";
import explore_sch from "../../../images/explore_schools.png";
import find_schl from "../../../images/find_scholarship.png";

const researchSchoolData = [
  {
    src: career_adv,
    alt: "career advisory",
    title: "Career Advisory",
  },
  {
    src: compare_sch,
    alt: "compare schools",
    title: "Compare Schools",
  },
  {
    src: explore_sch,
    alt: "explore schools",
    title: "Explore Schools",
  },
  {
    src: find_schl,
    alt: "find scholarship",
    title: "Find Scholarship",
  },
];

// Research School Card Component
const RSCard = ({ src, alt, title }) => {
  return (
    <figure className="rscard-container">
      <picture className="rscard-img-container">
        <img className="rscard-img" src={src} alt={alt} />
      </picture>
      <figcaption className="rscard-caption-container">
        <p className="rscard-caption">{title}</p>
        <svg
          className="rscard-arrow-right"
          width="17"
          height="15"
          viewBox="0 0 17 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 7.7254C0 7.3457 0.282154 7.03191 0.648229 
          6.98225L0.75 6.9754L13.934 6.976L9.17101 2.23247C8.87749 
          1.94021 8.87647 1.46534 9.16873 1.17181C9.43442 0.904974 
          9.85103 0.87987 10.1451 1.09709L10.2294 1.16953L16.2794 
          7.19353C16.3181 7.23205 16.3517 7.27375 16.3802 
          7.31778C16.3883 7.33103 16.3965 7.34459 16.4042 
          7.35842C16.4114 7.37028 16.4178 7.38259 16.4239 
          7.39503C16.4324 7.41314 16.4407 7.43185 16.4482 
          7.45094C16.4543 7.46566 16.4594 7.47998 16.464 
          7.49441C16.4696 7.5123 16.4749 7.53137 16.4796 
          7.55073C16.483 7.56425 16.4857 7.57725 16.4881 
          7.59031C16.4914 7.60975 16.4943 7.62985 16.4963 
          7.6502C16.498 7.66572 16.4991 7.68109 16.4997 
          7.69648C16.4998 7.70582 16.5 7.71559 16.5 7.7254L16.4996 
          7.75445C16.4991 7.76917 16.498 7.78388 16.4966 7.79855L16.5 
          7.7254C16.5 7.77273 16.4956 7.81903 16.4872 7.86393C16.4853 
          7.87465 16.483 7.88566 16.4804 7.89662C16.4751 7.9192 
          16.4689 7.94094 16.4618 7.96226C16.4584 7.97285 16.4543 
          7.98416 16.45 7.99539C16.4412 8.01796 16.4317 8.03947 16.4212 
          8.06043C16.4163 8.07028 16.4109 8.0806 16.4052 8.09081C16.3958 
          8.10747 16.3861 8.1233 16.3759 8.13873C16.3687 8.14965 16.3607 
          8.16101 16.3524 8.1722L16.3459 8.18085C16.3257 8.20724 16.3038 
          8.23226 16.2803 8.25573L16.2794 8.25643L10.2294 14.2814C9.93593 
          14.5737 9.46106 14.5727 9.16877 14.2792C8.90306 14.0124 8.87971 
          13.5957 9.09818 13.3025L9.17097 13.2186L13.932 8.476L0.75 
          8.4754C0.335786 8.4754 0 8.13961 0 7.7254Z"
          />
        </svg>
      </figcaption>
    </figure>
  );
};

// Component implementation
const ResearchSchoolSection = () => {
  return (
    <div className="rscards-container">
      {researchSchoolData.map((item, index) => {
        return (
          <RSCard
            key={index}
            src={item.src}
            alt={item.alt}
            title={item.title}
          />
        );
      })}
    </div>
  );
};

export default ResearchSchoolSection;
