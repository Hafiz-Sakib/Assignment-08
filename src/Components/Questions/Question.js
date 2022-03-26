import React from "react";
import "./Question.css";
const Question = () => {
  return (
    <div className="Questuion__One">
      <h1 className="Questuion__One__heading text-danger">
        Props আর State এর মধ্যে পার্থক্য কী?
      </h1>
      <h5>
        ১)Props এর মাধ্যমে ডেটা এক কম্পোনেন্ট থেকে অন্য কম্পোনেন্টে প্রেরণ করা
        হয়।কিন্তু State এর মাধ্যমে তথ্য শুধুমাত্র কোনো কম্পোনেন্ট এর মধ্যে পাস
        করা হয়.
      </h5>
      <br />
      <h5>
        ২)Props সাধারণত অপরিবর্তনীয়,অর্থাৎ, ডেটা স্থানান্তরের সময় ডেটা চেঞ্জ
        করা যাবেনা।কিন্তু,Props পরিবর্তনীয়
      </h5>
      <br />
      <h5>
        ৩)State এবং functional components সাথে Props ব্যবহার করা যেতে পারে।
        স্টেট শুধুমাত্র স্টেট কম্পোনেন্ট/ক্লাস কম্পোনেন্টের সাথে ব্যবহার করা
        যেতে পারে
      </h5>
      <br />
      <h5>
        ৪)Props শুধুমাত্র পড়ার উপযোগী(Readable)।কিন্তু,State read and write
        able.
      </h5>
      <div>
        <h1 className="Questuion__two text-danger">How React Works?</h1>
        <h5 className="Questuion__two__heading">
          React মূলত একটা Virtual Dom তৈরী করে রাখে,DOM এর সফট কপিও বলা যায়
          একে।যখন DOM এর কোনোকিছু চেঞ্জ হয় তখন React নতুন DOM Create করে পূর্বের
          DOM এর সাথে তুলনা করে শুধুমাত্র আগের ডমের(Virtual DOM) এর কোন জায়গায়
          চেঞ্জ হয়েছে সেটা Detect করে এবং সে অনুযায়ী মেইন ডমে পরিবর্তন টা করে
          নেয়।এতে Website এর পারফরম্যান্স অনেকাংশে বৃদ্ধি পায়।কেননা,এতে React কে
          DOM এর প্রতিটা Element কে ধরে ধরে চেক করার প্রয়োজন পড়েনা এবং পুরো DOM
          কে Re-Render করার প্রয়োজন পড়েনা
        </h5>
      </div>
    </div>
  );
};

export default Question;
