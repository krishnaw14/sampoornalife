import FAQ from "../common/FAQ";

const faqItems = [
  {
    question: 'What is the mission Sampoorna?',
    answer: 'Sampoorna aims to empower underprivileged children through relevant education and holistic development through innovative solutions. We aim to deploy the best possible methodology and technology to uplift the lives of children in need and assist them in bridging the gap towards a brighter future.',
  },
  {
    question: 'Why does Sampoorna focus on after-school education?',
    answer: 'After-school programs encompass a broad range of focus areas including academic support, mentoring, arts, sports and recreation, and many more sessions which help instil important life skills such as teamwork, leadership, and communication, which can benefit these children throughout their lives. It is a support system that helps them excel holistically.',
  },
  {
    question: 'From where do the children come and in what age bracket are they?',
    answer: 'We believe that everybody should have a reasonable quality of life. And so we began our journey by reaching out to children of our nearest society in underprivileged conditions. We encouraged and affiliated these children to Sampoorna to brighten their futures and put an end to their struggle to make ends meet. We have embarked on the journey of brightening more than 80 children so far.',
  },
  {
    question: 'What exactly is the holistic development of the child?',
    answer: 'Sampoorna’s initiative facilitates a holistic approach to the learning and development of children in the crucial 4-14 years age group. We do this through our thoughtfully designed learning centre at Guru Teg Bahadur Udyan, Raipur; thereby augmenting formal education through activity-based learning and institutionalising holistic learning by focussing on academics, mental health, nutrition, and skills. We also work with parents and teachers to help them become effective contributors towards the child’s overall development.',
  },
  {
    question: 'Do we enroll our children on school education?',
    answer: 'Our learning centre is based at Guru Teg Bahadur Udhyan, Civil Lines, Raipur, where we conduct post-school academic sessions through well-versed tutors, nutritional awareness, skill development training, mental health and sanitation-related workshops conducted by volunteers who excel in respective fields, at 03:00 pm-05:00 pm.',
  },
  {
    question: 'How was Sampoorna started?',
    answer: 'Children are the building blocks of our nation’s future. But not all are privileged to benefit the lives they deserve. The alarming issue of lack of education, child labour, malnourishment, and scarcity of basic upbringing every child must be privileged with, lead us to this path. Fueled with enthusiasm, Sampoorna’s founders gave shape to their dream of addressing these problems before us, from a very personal stage to establishing a remarkably promising team with a paired vision. All it needs is for each one of us to come together and do everything in our power to contribute to a sustainable solution in building beautiful and empowered futures.',
  },
  {
    question: 'How can one contribute to Sampoorna?',
    answer: 'We are working on various projects which are designed to cover all the basic needs of the children with generous contributions. You can contribute to a particular project for a specific cause or can donate in general wherein we allocate the amount to the required project. For more details please refer to our ‘donate now’ section.',
  },
  {
    question: 'How many kids have we impacted till now?',
    answer: 'We have elevated the lives of more than 80 children so far, who have commenced their journey to an empowered and promising future.',
  },
  {
    question: 'How can one work with Sampoorna?',
    answer: 'As we are in the developmental phase, we need all the enthusiasts we can have. So, you can fill out the volunteer form or contact us and connect with Sampoorna, part-time or full-time as per convenience.',
  },
];

function FAQPage() {
  return (
  <div className="container mx-auto flex flex-col px-2 w-11/12 sm:w-2/3 py-12">
      <h1 className="text-4xl font-bold text-center py-12">Frequently Asked Questions</h1>
      <FAQ items={faqItems} />
    </div>
  );
}

export default FAQPage;
