import React from "react";

export default function About() {
  return (
    <>
      <div
        className="container mx-auto flex flex-col py-12 px-2 w-11/12 sm:w-2/3"
        id="about">
        <p className="text-4xl font-bold text-center">About Us</p>
        <p className="text-gray-500 text-justify font-normal my-4">
        We at Sampoorna conduct after school teaching along with diverse initiatives. Be it Spirituality, Human rights, Dance, Yoga, Art and craft, Movie drive, Life skill coaching, Cleanliness and Kindness drives… we try to accomplish them all. 
        <br />
        The Sampoorna&apos;s promising family is blossoming day by day by adding new students under its umbrella. Our goal not only narrows to teaching after school but also pursuits of “Send a Child to School” Programme. 
        Over the year we have gained the confidence of students along with the trust of their parents or guardians whom we assured that their children are in right and capable hands for a bright future ahead. 
        <br />
        The team of Sampoorna is always primed with exclusive ideas and suggestions that fit well for the betterment of our students at large.
          <br />
          <br />
          We always welcome volunteers who are willing to teach and help us in our mission. Please fill out the form below to join us in our upcoming events!
        </p>

      </div>
        <div className="container mx-auto flex flex-col px-2 sm:w-1/2 w-10/12 sm:w-8/12 md:w-5/12 lg:w-1/4 text-center item-center">
        <a href="https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__U1niv9UOVBHNElSRDlKU0M5UkM4TUNXTVFVNEVDRS4u"
        className="bg-blue-500 p-3 text-white font-semibold rounded-full hover:shadow-blue-500/30 hover:scale-[1.02] transition-all ease-in-out duration-100 sm:scale-10"
        rel="noopener noreferrer"
        >
        Volunteer with us.
        </a>
        </div>
    </>
  );
}
