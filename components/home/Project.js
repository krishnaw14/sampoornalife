import React from "react";
import Card from '../common/Card';

export default function Project() {
  return (
    <div
      className="flex flex-col w-full items-center mt-10 md:mt-14 "
      id="project"
    >
      <p className="text-4xl font-bold">Our Projects</p>
      <p className="text-gray-500 justify-stretch text-xl w-full md:w-8/12 text-center my-4">
      We have various ongoing long-term projects through which we aim to achieve holistic development of many children. You can help us accomplish these projects by making kind contributions.      <br />
      </p>
      <br />
      <br />

      <div className="flex flex-wrap justify-center gap-8 p-8">
      <div className="flex flex-wrap justify-center gap-4 p-2">
        <Card
          imageUrl="/projects/birthdayproject/1.jpg"
          title="Birthday Project"
          slug="BirthdayProject"
        />
        <Card
          imageUrl="/projects/khusiyonkapitara/5.jpg"
          title="Khushiyon Ka Pitara"
          slug="KhusiyonKaPitara"
        />
        <Card
          imageUrl="/projects/nutritionforall/1.jpg"
          title="Nutrition for All"
          slug="NutritionForAll"
        />
      </div>
      <div className="flex justify-center gap-8 p-2">
        <Card
          imageUrl="/projects/sendachildtoschool/1.jpg"
          title="Send a Child to School"
          slug="SendAChildToSchool"
        />
        <Card
          imageUrl="/projects/sponserateacher/1.jpg"
          title="Sponsor a Teacher"
          slug="SponsorATeacher"
        />
      </div>
    </div>

    </div>

  );
}
