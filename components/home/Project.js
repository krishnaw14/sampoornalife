import React from "react";
import Card from '../common/Card';

export default function Project() {
  return (
    <div
      className="flex flex-col w-full items-center mt-8 md:mt-8"
      id="project"
    >
      <p className="text-4xl font-bold">Our Projects</p>
      <p className="text-gray-500 justify-stretch text-xl w-full md:w-8/12 text-center my-4">
      We have various ongoing long-term projects through which we aim to achieve holistic development of many children. You can help us accomplish these projects by making kind contributions.      <br />
      </p>
      <br />
      <br />

      <div className="container flex flex-wrap justify-center gap-4 p-4 column-8">
        <Card
          imageUrl="/projects/birthdayproject/1.jpg"
          title="Birthday Project"
          slug="BirthdayProject"
        />
        <Card
          imageUrl="/projects/khusiyonkapitara/1.png"
          title="Khushiyon Ka Pitara"
          slug="KhusiyonKaPitara"
        />
        <Card
          imageUrl="/projects/nutritionforall/1.JPG"
          title="Nutrition for All"
          slug="NutritionForAll"
        />
        <Card
          imageUrl="/projects/sendachildtoschool/1.JPG"
          title="Send a Child to School"
          slug="SendAChildToSchool"
        />
        <Card
          imageUrl="/projects/sponserateacher/1.jpg"
          title="Sponsor a Teacher"
          slug="SponsorATeacher"
        />
        <Card
          imageUrl="/projects/summerschool/1.jpg"
          title="Summer School"
          slug="SummerSchool"
        />
    </div>

    </div>

  );
}
