import React from "react";
import Card from '../common/Card';

export default function Project() {
  return (
    <div
      className="container mx-auto flex flex-col py-12 px-2 w-11/12 sm:w-2/3"
      id="project"
    >
      <p className="text-center text-4xl font-bold">Our Projects</p>
      <p className="text-gray-500 text-justify text-xl text-center my-4">
      We have various ongoing long-term projects through which we aim to achieve holistic development of many children. You can help us accomplish these projects by making kind contributions.      <br />
      </p>
      <br />
      <br />

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      <Card
          imageUrl="/projects/sponserateacher/1.jpg"
          title="Sponsor a Teacher"
          slug="SponsorATeacher"
        />
        <Card
          imageUrl="/projects/sendachildtoschool/1.JPG"
          title="Send a Child to School"
          slug="SendAChildToSchool"
        />
        <Card
          imageUrl="/projects/nutritionforall/1.JPG"
          title="Nutrition for All"
          slug="NutritionForAll"
        />
        <Card
          imageUrl="/projects/birthdayproject/1.jpg"
          title="Birthday Project"
          slug="BirthdayProject"
        />
        <Card
          imageUrl="/projects/summerschool/1.jpg"
          title="Summer School"
          slug="SummerSchool"
        />
        <Card
          imageUrl="/projects/khusiyonkapitara/1.png"
          title="Khushiyon Ka Pitara"
          slug="KhusiyonKaPitara"
        />
    </div>

    </div>

  );
}
