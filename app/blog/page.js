"use client";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 mt-8 sm:mt-16">
      {/* Story Header */}
      <div className="text-center mb-8 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-3 sm:mb-4 mt-7 sm:mt-0 ">
          My Coding Odyssey
        </h2>
        <p className="text-base sm:text-lg text-gray-600 px-2 sm:px-0">
          From &quot;Hello World&quot; to Full Stack - A rollercoaster journey of bugs, breakthroughs, and badges!
        </p>
        <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-3 sm:mt-4 rounded-full" />
      </div>

      {/* Timeline Story */}
      <div className="relative">
        {/* Vertical Timeline Line - Hidden on mobile */}
        <div className="hidden sm:block absolute left-6 h-full w-1 bg-gradient-to-b from-blue-200 to-purple-200" />

        {/* Chapter 1: Java */}
        <div className="relative pl-0 sm:pl-12 mb-12 sm:mb-16">
          <div className="hidden sm:block absolute -left-1 top-2 w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-lg flex items-center justify-center">
            <span className="text-white text-xs">1</span>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center mb-3 gap-2 sm:gap-0">
              <span className="text-2xl mr-0 sm:mr-3">☕</span>
              <h3 className="text-lg sm:text-xl font-bold text-blue-600">The Java Awakening</h3>
              <div className="ml-0 sm:ml-auto flex gap-2 justify-start sm:justify-end">
                <Image 
                  src="https://img.shields.io/badge/Java-Intermediate-orange" 
                  alt="Java" 
                  width={90} 
                  height={24} 
                  className="h-5 sm:h-6 w-auto" 
                />
                <Image 
                  src="https://img.shields.io/badge/OOP-Understood-blue" 
                  alt="OOP" 
                  width={90} 
                  height={24} 
                  className="h-5 sm:h-6 w-auto" 
                />
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-700 mb-4"> 
              &quot;My first encounter with Java felt like trying to read Shakespeare as a toddler! 
              <span className="block my-2 border-l-4 border-blue-300 pl-3 sm:pl-4 italic text-blue-700 text-sm sm:text-base">
                Why does &apos;public static void main(String[] args)&apos; need to be so long? - Me, 2am debugging
              </span>
              Then I discovered <span className="font-semibold text-blue-600">CodeWithHarry</span>&apos;s Java series where he compared classes to cookie cutters and objects to cookies. Suddenly, OOP made delicious sense!&quot;
            </p>
            <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2 flex items-center text-sm sm:text-base">
                <span className="mr-2">🏆</span> Java Victories:
              </h4>
              <ul className="list-disc pl-4 sm:pl-5 text-gray-700 space-y-1 text-sm sm:text-base">
                <li>Built a banking app that only crashed <span className="line-through">most</span> some of the time</li>
                <li>Created a calculator with UI colors that would make designers cry</li>
                <li>Finally understood why we use getters/setters (after 47 StackOverflow searches)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Chapter 2: Python */}
        <div className="relative pl-0 sm:pl-12 mb-12 sm:mb-16">
          <div className="hidden sm:block absolute -left-1 top-2 w-6 h-6 rounded-full bg-green-500 border-4 border-white shadow-lg flex items-center justify-center">
            <span className="text-white text-xs">2</span>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center mb-3 gap-2 sm:gap-0">
              <span className="text-2xl mr-0 sm:mr-3">🐍</span>
              <h3 className="text-lg sm:text-xl font-bold text-green-600">Python - Where Code Became Poetry</h3>
              <div className="ml-0 sm:ml-auto flex gap-2 justify-start sm:justify-end">
                <Image 
                  src="https://img.shields.io/badge/Python-Love%20At%20First%20Sight-brightgreen" 
                  alt="Python" 
                  width={150} 
                  height={24} 
                  className="h-5 sm:h-6 w-auto" 
                />
               
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-700 mb-4">
              &quot;After Java&apos;s semicolon tyranny, Python felt like coding in slippers! Harry&apos;s &apos;Automate the Boring Stuff&apos; tutorial had me:
              <span className="block my-2 border-l-4 border-green-300 pl-3 sm:pl-4 italic text-green-700 text-sm sm:text-base">
                &quot;Wait... I can scrape websites AND automate my homework? Is this legal?&quot; - Me, becoming a Python convert
              </span>
              Suddenly I was building bots that could:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
              <div className="bg-green-100 p-2 sm:p-3 rounded-lg text-center hover:scale-105 transition-transform">
                <span className="text-lg">📧</span>
                <p className="text-xs sm:text-sm font-medium">Email auto-responders</p>
                <Image 
                  src="https://img.shields.io/badge/smtplib-Used-yellowgreen" 
                  alt="smtplib" 
                  width={100} 
                  height={16} 
                  className="h-3 sm:h-4 w-auto mx-auto mt-1" 
                />
              </div>
              <div className="bg-green-100 p-2 sm:p-3 rounded-lg text-center hover:scale-105 transition-transform">
                <span className="text-lg">🕵️</span>
                <p className="text-xs sm:text-sm font-medium">Web scrapers</p>
                <Image 
                  src="https://img.shields.io/badge/BeautifulSoup4-Mastered-green" 
                  alt="BeautifulSoup" 
                  width={130} 
                  height={16} 
                  className="h-3 sm:h-4 w-auto mx-auto mt-1" 
                />
              </div>
              <div className="bg-green-100 p-2 sm:p-3 rounded-lg text-center hover:scale-105 transition-transform">
                <span className="text-lg">📊</span>
                <p className="text-xs sm:text-sm font-medium">Data visualizers</p>
                <Image 
                  src="https://img.shields.io/badge/Matplotlib-Artist-blue" 
                  alt="Matplotlib" 
                  width={100} 
                  height={16} 
                  className="h-3 sm:h-4 w-auto mx-auto mt-1" 
                />
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-700">
              &quot;Python taught me that code could be <span className="font-semibold text-green-600">expressive</span> and <span className="font-semibold">powerful</span>. 
              But I missed those Java braces... said no one ever!&quot;
            </p>
          </div>
        </div>

        {/* Chapter 3: JavaScript */}
        <div className="relative pl-0 sm:pl-12 mb-12 sm:mb-16">
          <div className="hidden sm:block absolute -left-1 top-2 w-6 h-6 rounded-full bg-yellow-500 border-4 border-white shadow-lg flex items-center justify-center">
            <span className="text-white text-xs">3</span>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center mb-3 gap-2 sm:gap-0">
              <span className="text-2xl mr-0 sm:mr-3">🌐</span>
              <h3 className="text-lg sm:text-xl font-bold text-yellow-600">JavaScript - The Browser Whisperer</h3>
              <div className="ml-0 sm:ml-auto flex gap-2 justify-start sm:justify-end">
                <Image 
                  src="https://img.shields.io/badge/JS-Callback%20Hell-yellow" 
                  alt="JavaScript" 
                  width={120} 
                  height={24} 
                  className="h-5 sm:h-6 w-auto" 
                />
                <Image 
                  src="https://img.shields.io/badge/DOM-Manipulation-blue" 
                  alt="DOM" 
                  width={110} 
                  height={24} 
                  className="h-5 sm:h-6 w-auto" 
                />
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-700 mb-4">
              &quot;When Harry demonstrated <code className="bg-yellow-100 px-1 rounded text-xs sm:text-sm">document.querySelector()</code> magically changing page elements, 
              I felt like I&apos;d discovered superpowers!
              <span className="block my-2 border-l-4 border-yellow-300 pl-3 sm:pl-4 italic text-yellow-700 text-sm sm:text-base">
                &quot;I can make buttons actually DO things? This changes everything!&quot; - Me, about to break every website
              </span>
              My Chrome console became a playground for:&quot;
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-yellow-100 text-yellow-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex items-center">
                <span className="mr-1">✅</span> Todo lists
                <Image 
                  src="https://img.shields.io/badge/LocalStorage-Used-lightgrey" 
                  alt="LocalStorage" 
                  width={110} 
                  height={16} 
                  className="h-3 sm:h-4 w-auto ml-1" 
                />
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex items-center">
                <span className="mr-1">⏱️</span> Pomodoro timers
                <Image 
                  src="https://img.shields.io/badge/setInterval-Abused-red" 
                  alt="setInterval" 
                  width={100} 
                  height={16} 
                  className="h-3 sm:h-4 w-auto ml-1" 
                />
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm flex items-center">
                <span className="mr-1">🌦️</span> Weather apps
                <Image 
                  src="https://img.shields.io/badge/API-Fetched-blue" 
                  alt="API" 
                  width={80} 
                  height={16} 
                  className="h-3 sm:h-4 w-auto ml-1" 
                />
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-700">
              &quot;But my apps still looked like they were from the 90s. I needed <span className="font-semibold text-yellow-600">structure</span>...&quot;
            </p>
          </div>
        </div>

        {/* Chapter 4: React */}
        <div className="relative pl-0 sm:pl-12 mb-12 sm:mb-16">
          <div className="hidden sm:block absolute -left-1 top-2 w-6 h-6 rounded-full bg-blue-400 border-4 border-white shadow-lg flex items-center justify-center">
            <span className="text-white text-xs">4</span>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center mb-3 gap-2 sm:gap-0">
              <span className="text-2xl mr-0 sm:mr-3">⚛️</span>
              <h3 className="text-lg sm:text-xl font-bold text-blue-400">React - Where Components Became My Friends</h3>
              <div className="ml-0 sm:ml-auto flex gap-2 justify-start sm:justify-end">
                <Image 
                  src="https://img.shields.io/badge/React-Hooks%20Lover-blue" 
                  alt="React" 
                  width={130} 
                  height={24} 
                  className="h-5 sm:h-6 w-auto" 
                />
                <Image 
                  src="https://img.shields.io/badge/JSX-Converted-yellow" 
                  alt="JSX" 
                  width={100} 
                  height={24} 
                  className="h-5 sm:h-6 w-auto" 
                />
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-700 mb-4">
              &quot;React&apos;s component architecture finally made sense when Harry compared it to LEGO blocks:
              <span className="block my-2 border-l-4 border-blue-200 pl-3 sm:pl-4 italic text-blue-700 text-sm sm:text-base">
                &quot;Wait... I can build this button once and reuse it everywhere? That&apos;s not cheating?&quot; - Me, discovering DRY principle
              </span>
              My React journey milestones:&quot;
            </p>
            <ul className="list-disc pl-4 sm:pl-5 text-gray-700 space-y-2 mb-4 text-sm sm:text-base">
              <li className="flex items-start">
                <span className="mr-2">🎉</span>
                <div>
                  <span className="font-medium">Counter App</span> - Where I finally understood state
                  <Image 
                    src="https://img.shields.io/badge/useState-Conquered-purple" 
                    alt="useState" 
                    width={100} 
                    height={16} 
                    className="h-3 sm:h-4 w-auto ml-2 inline" 
                  />
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🛒</span>
                <div>
                  <span className="font-medium">E-commerce UI</span> - Learned props the hard way
                  <Image 
                    src="https://img.shields.io/badge/Prop%20Drilling-Suffered-red" 
                    alt="Prop Drilling" 
                    width={120} 
                    height={16} 
                    className="h-3 sm:h-4 w-auto ml-2 inline" 
                  />
                </div>
              </li>
              <li className="flex items-start">
                <span className="mr-2">🔀</span>
                <div>
                  <span className="font-medium">Context API</span> - Global state became my best friend
                  <Image 
                    src="https://img.shields.io/badge/Redux--Not%20Needed-success" 
                    alt="Context API" 
                    width={130} 
                    height={16} 
                    className="h-3 sm:h-4 w-auto ml-2 inline" 
                  />
                </div>
              </li>
            </ul>
            <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
              <p className="text-blue-800 font-medium flex items-center text-sm sm:text-base">
                <span className="mr-2">💡</span>
                &quot;React made me realize: Good UI is like a joke - if you have to explain it, it&apos;s not good&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Backend Trilogy */}
        <div className="relative pl-0 sm:pl-12 mb-12 sm:mb-16">
          <div className="hidden sm:block absolute -left-1 top-2 w-6 h-6 rounded-full bg-purple-500 border-4 border-white shadow-lg flex items-center justify-center">
            <span className="text-white text-xs">5-7</span>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all">
            <h3 className="text-lg sm:text-xl font-bold text-purple-600 mb-4 text-center">
              The Backend Saga - Where I Learned Servers Don&apos;t Grow on Trees
            </h3>
            
            {/* Node.js */}
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400 hover:bg-purple-100 transition-colors">
              <h4 className="font-bold text-purple-700 mb-2 flex items-center text-sm sm:text-base">
                <span className="mr-2">🖥️</span> Node.js - JavaScript&apos;s Backend Adventure
                <Image 
                  src="https://img.shields.io/badge/CommonJS-Required-blue" 
                  alt="CommonJS" 
                  width={120} 
                  height={20} 
                  className="h-4 sm:h-5 w-auto ml-auto" 
                />
              </h4>
              <p className="text-gray-700 mb-3 text-sm sm:text-base">
                &quot;Running JavaScript outside the browser felt like seeing your teacher at the mall - confusing but exciting!
                <span className="block my-1 text-xs sm:text-sm text-purple-600">
                  First server achievement: Made &quot;Hello World&quot; appear at localhost:3000 (after 3 crashes)
                </span>
              </p>
            </div>
            
            {/* Express */}
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400 hover:bg-purple-100 transition-colors">
              <h4 className="font-bold text-purple-700 mb-2 flex items-center text-sm sm:text-base">
                <span className="mr-2">🚀</span> Express - Routing Like a Mailman
                <Image 
                  src="https://img.shields.io/badge/Middleware-Magic-9cf" 
                  alt="Middleware" 
                  width={110} 
                  height={20} 
                  className="h-4 sm:h-5 w-auto ml-auto" 
                />
              </h4>
              <p className="text-gray-700 mb-3 text-sm sm:text-base">
                &quot;Harry&apos;s analogy of Express routes as postal routes finally made REST APIs click:
                <span className="block my-1 text-xs sm:text-sm text-purple-600">
                  GET - Checking your mailbox | POST - Sending a letter | PUT - Updating your address
                </span>
              </p>
            </div>
            
            {/* MongoDB */}
            <div className="p-3 sm:p-4 bg-purple-50 rounded-lg border-l-4 border-purple-400 hover:bg-purple-100 transition-colors">
              <h4 className="font-bold text-purple-700 mb-2 flex items-center text-sm sm:text-base">
                <span className="mr-2">🍃</span> MongoDB - Where Tables Went Extinct
                <Image 
                  src="https://img.shields.io/badge/NoSQL-Flexible-green" 
                  alt="NoSQL" 
                  width={90} 
                  height={20} 
                  className="h-4 sm:h-5 w-auto ml-auto" 
                />
              </h4>
              <p className="text-gray-700 text-sm sm:text-base">
                &quot;Collections? Documents? Harry&apos;s &apos;MongoDB in 1 Video&apos; saved me from SQL-induced headaches:
                <span className="block my-1 text-xs sm:text-sm text-purple-600">
                  First document saved: {`{name: 'John', age: 25, hobbies: ['coding', 'crying']}`}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Chapter 8: Next.js */}
        <div className="relative pl-0 sm:pl-12">
          <div className="hidden sm:block absolute -left-1 top-2 w-6 h-6 rounded-full bg-black border-4 border-white shadow-lg flex items-center justify-center">
            <span className="text-white text-xs">8</span>
          </div>
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-center mb-3 gap-2 sm:gap-0">
              <span className="text-2xl mr-0 sm:mr-3">⚡</span>
              <h3 className="text-lg sm:text-xl font-bold text-gray-800">Next.js - The Full Stack Holy Grail</h3>
              <div className="ml-0 sm:ml-auto flex gap-2 justify-start sm:justify-end">
                <Image 
                  src="https://img.shields.io/badge/SSR-Learned-blue" 
                  alt="SSR" 
                  width={90} 
                  height={24} 
                  className="h-5 sm:h-6 w-auto" 
                />
                <Image 
                  src="https://img.shields.io/badge/API%20Routes-Loved-green" 
                  alt="API Routes" 
                  width={110} 
                  height={24} 
                  className="h-5 sm:h-6 w-auto" 
                />
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-700 mb-4">
              &quot;After backend headaches, Next.js felt like finding cheat codes for web development:
              <span className="block my-2 border-l-4 border-gray-400 pl-3 sm:pl-4 italic text-gray-700 text-sm sm:text-base">
                &quot;Wait... I can put backend and frontend in ONE project? This should be illegal!&quot; - Me, converting to Next.js
              </span>
              Why Next.js became my go-to:&quot;
            </p>
            <div className="bg-white p-3 sm:p-4 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2 flex items-center text-sm sm:text-base">
                <span className="mr-2">❤️</span> Next.js Superpowers:
              </h4>
              <ul className="list-disc pl-4 sm:pl-5 text-gray-700 space-y-1 text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="mr-1">✅</span>
                  <div>
                    File-based routing that actually makes sense
                    <Image 
                      src="https://img.shields.io/badge/No%20More%20React%20Router-blue" 
                      alt="Routing" 
                      width={150} 
                      height={16} 
                      className="h-3 sm:h-4 w-auto ml-1 inline" 
                    />
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-1">🚫</span>
                  <div>
                    CORS errors? Never heard of them
                    <Image 
                      src="https://img.shields.io/badge/API%20Routes-Solved%20It-success" 
                      alt="API Routes" 
                      width={120} 
                      height={16} 
                      className="h-3 sm:h-4 w-auto ml-1 inline" 
                    />
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="mr-1">⚡</span>
                  <div>
                    Performance optimizations out of the box
                    <Image 
                      src="https://img.shields.io/badge/Image%20Optimization-Awesome-blue" 
                      alt="Image Opt" 
                      width={150} 
                      height={16} 
                      className="h-3 sm:h-4 w-auto ml-1 inline" 
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Story Conclusion */}
        <div className="mt-12 sm:mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 p-6 sm:p-8 rounded-2xl border-2 border-dashed border-blue-200">
          <h3 className="text-xl sm:text-2xl font-bold text-blue-600 mb-3 sm:mb-4">The Journey Continues...</h3>
          <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto mb-4 sm:mb-6 px-2 sm:px-0">
            &quot;From console.log to full-stack developer - all thanks to <span className="font-semibold text-blue-600">CodeWithHarry</span>&apos;s 
            tutorials that never made me feel stupid for asking &apos;but why?&apos;&quot;
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <span className="bg-white px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-sm text-xs sm:text-sm font-medium flex items-center">
              <span className="mr-1">⌨️</span> TypeScript
              <Image 
                src="https://img.shields.io/badge/Types-Safe-blue" 
                alt="TypeScript" 
                width={80} 
                height={16} 
                className="h-3 sm:h-4 w-auto ml-1" 
              />
            </span>
            <span className="bg-white px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-sm text-xs sm:text-sm font-medium flex items-center">
              <span className="mr-1">🐳</span> Docker
              <Image 
                src="https://img.shields.io/badge/Containers-Magic-blue" 
                alt="Docker" 
                width={100} 
                height={16} 
                className="h-3 sm:h-4 w-auto ml-1" 
              />
            </span>
            <span className="bg-white px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-sm text-xs sm:text-sm font-medium flex items-center">
              <span className="mr-1">☁️</span> AWS
              <Image 
                src="https://img.shields.io/badge/Cloud-Expensive-orange" 
                alt="AWS" 
                width={100} 
                height={16} 
                className="h-3 sm:h-4 w-auto ml-1" 
              />
            </span>
            <span className="bg-white px-3 sm:px-4 py-1 sm:py-2 rounded-full shadow-sm text-xs sm:text-sm font-medium flex items-center">
              <span className="mr-1">📡</span> GraphQL
              <Image 
                src="https://img.shields.io/badge/Overfetching-Solved-pink" 
                alt="GraphQL" 
                width={110} 
                height={16} 
                className="h-3 sm:h-4 w-auto ml-1" 
              />
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 flex items-center justify-center">
            <Image 
              src="https://img.shields.io/badge/Next%20Stop-Full%20Stack%20Mastery-purple" 
              alt="Next Stop" 
              width={180} 
              height={24} 
              className="h-5 sm:h-6 w-auto mr-2" 
            />
            The coding adventure continues! 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;