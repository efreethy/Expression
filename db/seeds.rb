User.create!({username: "sparks", password: "password",prof_image_url: "http://res.cloudinary.com/efreezy/image/upload/v1445195699/fgiewxyvlnrecxtk2gzm.jpg"})
User.create!({username: "Evan Freethy", password: "thepassword",prof_image_url: "http://res.cloudinary.com/efreezy/image/upload/v1445451834/torsion_torus_ycfoty.jpg"})
User.create!({username: "InVision", password: "thepassword",prof_image_url: "http://res.cloudinary.com/efreezy/image/upload/v1445450790/inVision_tuujqn.png"})
User.create!({username: "Chris Stang", password: "thepassword",prof_image_url: "http://res.cloudinary.com/efreezy/image/upload/v1445447820/chris-stang_glgnpo.jpg"})
User.create!({username: "Luks Piekut", password: "thepassword",prof_image_url: "http://res.cloudinary.com/efreezy/image/upload/v1445449751/luks-piekut_ue7qwh.jpg"})
User.create!({username: "The Academy", password: "thepassword",prof_image_url: "http://res.cloudinary.com/efreezy/image/upload/v1445911501/academy_vzaxac.jpg"})

Tag.create!([
  {name: "Nasa"},
  {name: "Google"},
  {name: "space"},
  {name: "technology"},
  {name: "wine"},
  {name: "food"},
  {name: "Augmented Reality"},
  {name: "Computer Vision"},
  {name: "art"},
])


User.find_by_username("sparks").stories.create!([
  {title: "How to Help the Nepal Earthquake Relief Effort",
   body: "<p>More than six million people live in the regions affected by the 7.8 magnitude earthquake that shook Nepal over the weekend. The quake and its aftershocks have left <i>over 3,000 people dead and almost 6,000 more injured</i>. Complicating things is the fast-approaching monsoon season, which generally begins around June.</p><p>The world has mobilized to support Nepal in its time of need. Several countries— including Nepal’s neighbors India and China and European countries like the UK and Norway—have already sent aid in the form of disaster response teams and financial assistance for charities already at work in the relief effort. A U.S. disaster response team of around 70 people is also expected to arrive on scene in Nepal today.</p><p>For those of us at home who want to help, many of the groups working hard on the ground are accepting donations for relief efforts in Nepal. This money will go to getting more response and search-and-rescue teams out there, as well as providing resources that are desperately needed by so many newly-homeless survivors, including plastic sheeting and other temporary shelter, drinking water—which is already of limited supply under normal circumstances in Nepal—and medical supplies like bandages and trauma kits.</p><p>Here, a list of organizations below where you can donate towards the Nepal relief effort:</p><p><a href='https://donate.salvationarmyusa.org/sawso/nepal-earthquake-disaster-relief'>The Salvation Army</a></p><p><a href='https://internationalmedicalcorps.org/nepal-earthquake-donate?source=LPFBN1504'>International Medical Corps</a></p><p><a href='https://handicapinternational.nationbuilder.com/donate_now_nepal_emergency'>Handicap International</a></p>",
   banner_image_url: "http://res.cloudinary.com/efreezy/image/upload/v1445446720/nepal_ujlfpg.jpg"}
])

User.find_by_username("sparks").all_followings = [
  User.find_by_username("Evan Freethy"),
  User.find_by_username("InVision"),
  User.find_by_username("Chris Stang"),
  User.find_by_username("Luks Piekut")
]

User.find_by_username("sparks").tag_subscriptions = [
  Tag.find_by_name("food"),
  Tag.find_by_name("wine"),
  Tag.find_by_name("technology"),
  Tag.find_by_name("Augmented Reality"),
  Tag.find_by_name("Google")
]

User.find_by_username("Chris Stang").stories.create!([
  {title: "How To Seem Like You Can Navigate A Wine List, When You Definitely Can’t",
   body: "<p>We’ve all been there. You’re at dinner with someone that you hope will find you appealing as a human being, whether it be to breed with, to do business with, or just to share stories about cats with. Then the wine list ends up in your hands and you either blindly choose something that you proceed to pronounce as “Cabinet Frank,” or you freeze up completely.</p><p>As someone who has studied wine a little bit (and drank wine a lot), allow me to present one basic approach that will at the very least make you seem knowledgable, if not very breedable.</p><p>All you have to do is follow these 7 simple steps.</p><p>1. <b>Start with how much you want to spend.</b></p><p>And be direct, even if it’s $40. Good restaurants take pride in having good value on their list, and the sommelier/wine person will be glad you told them regardless of your budget.</p><p>2. <b>Decide between red or white.</b></p><p>3. <b>Do not, under any circumstance, say “white zinfandel.”</b></p><p>4. <b>Pick a country or large wine producing region.</b></p><p>If you are unsure, play it safe and probably say France or California, just for the sake of simplicity and because you’ll find bottles from both on almost every list. Italy will work too, but follow up questions may get awkward because there are so many grapes and regions in that country.</p><p>5. <b>Be confident.</b></p><p><span style='line-height: 1.42857;'>&nbsp; Even if you have no idea what you’re saying.&nbsp;</span></p><p><span style='line-height: 1.42857;'>6. <b>Ask for input.</b></span></p><p>Leaving much of this open ended allows for the wine person to help guide you.</p><p>7. <b>Never pronounce a “t.”</b></p><p>Just to be safe.</p><p>But most importantly, the person sitting across from you will be impressed with your ability to take control of the situation, even if you do end up confessing that you have no idea what exactly the two of you are currently drinking.</p>",
   banner_image_url: "http://res.cloudinary.com/efreezy/image/upload/v1445447767/wine_ekwrml.jpg"},
  {title: "That’s Not Food, It’s madness",
   body: "<p>Look at that thing. Take it in.</p><p>The photo you see before you is a full lobster, <i>including</i> its shell, sitting on top of a pizza. As you examine this image, you might find yourself wondering why one would put a lobster shell on top of pizza, instead of, say, just the edible parts of the arthropod. You might also find yourself wondering why there are little “legs” made of red pepper slices laid out on the pie. Is this a small child’s contribution to “crazy food day” in Ms. Peterson’s second grade social studies class? Was it made for a longshoreman’s retirement party?</p><p>Unfortunately, it is neither of those things. It’s an actual dish served at an actual New York City restaurant, and it represents the pinnacle of a trend that’s been in the making for some time. And now it’s time for it to come to an end.</p><p>Maybe if it takes some frankenstein food abomination to get people to pay attention to what you’re doing, you’re doing something wrong. There are certainly plenty examples of smart business owners succesfully marketing on the platform, Dominique Ansel being one of them. The Cronut™ will be studied in graduate level marketing classes for decades to come. But that’s a unicorn example and — most importantly — Cronuts™ are actually really good. That lobster pizza is not, and neither is that funfetti birthday cake avocado toast that just popped up in your feed.</p><p>Let’s be clear that this is not an appeal to restaurants to stop marketing themselves. Lord knows it’s hard enough to figure out how to do that in the first place, especially with limited resources. Nor is it an appeal to the people of Instagram to stop liking and sharing these things, or wanting to experience them. This is simply my public wish that we all decide right now to agree that some things are food, <i>and some things are just </i><b>stupid</b>.</p><p>And it’s not hard to tell which is which.</p>",
   banner_image_url: "http://res.cloudinary.com/efreezy/image/upload/v1445449552/lobster_lpyqe8.jpg"}
])

User.find_by_username("Chris Stang").stories[0].tags = [Tag.find_by_name("food"), Tag.find_by_name("wine")]
User.find_by_username("Chris Stang").stories[1].tags = [Tag.find_by_name("food")]


User.find_by_username("Luks Piekut").stories.create!([
  {title: "Drink wine instead of tomato juice",
   body: "<p>I think most of us know Etgar Keret. Google says that he is: “an Israeli poet of Polish origin… best known for his stories. He is often considered a master of the short form.(…) His works are translated into many languages”. I really enjoy his short stories and I even played a small role in one of them.</p><p>Keret’s writing is concise and I really like it. He is able to tell an interesting story on two or three pages. Actually, he opens the stories and then the sentences start to breathe like wine in an opened bottle, gaining depth. We watch his characters through an open window, and when we stop watching them — they continue their lives, they do not fall asleep.</p><p>The story, in which I had an opportunity to meet the author is entitled “<b>Flight Meditations</b>” and it is a part of his last book “<b>The Seven Good Years</b>”. The author meditates in the air — he describes his time on board of airplanes during his book promotion travels. Time is thinning in the clouds. It is not wasted by browsing airline shopping catalogues again and again. It is not wasted by watching silly movies. It is not wasted by small talks with other passengers when queueing to the toilet at the back of the airplane.</p><p>I stood in such a queue, when I heard someone behind me asking:</p><p>— <i>Cool socks, are they from the catalogue?</i></p><p>I really had cool socks (decorated with a reproduction of “The Scream” by Edvard Munch) and I bought them in a designer boutique in San Francisco. I turned around just to see the biggest surprise of this flight — Etgar Keret!</p><p>— <i>Thanks — I said — No, not from the catalogue. Mr. Keret, right</i>?</p><p>— <i>Right— he said, shaking my hand — You can call me Etgar.</i></p><p>We talked for a while and when it was my turn to enter the toilet, I gave way to Etgar. It seemed that tomato juice did not serve him well. When we were leaving, I said to him that drinking wine is safer (but reading the end of his short story I saw that this advice was ignored).</p><p>I returned to my seat. For a while I contemplated recent moments. The captain informed us that we were about to land. Not thinking much, I reached for the airline shopping catalogue and I started flipping through it. Oh … it’s my socks!</p>",
   banner_image_url: "http://res.cloudinary.com/efreezy/image/upload/v1445450059/wine-plane_tbrdei.jpg"}
])
User.find_by_username("Luks Piekut").stories[0].tags = [Tag.find_by_name("food"), Tag.find_by_name("wine")]
User.find_by_username("Luks Piekut").stories[0].all_users_who_recommend =
    [User.find_by_username("Chris Stang"),
      User.find_by_username("sparks"),  User.find_by_username("InVision")]

User.find_by_username("InVision").stories.create!([
  {title: "Designing humane augmented reality user experiences",
   body: "<p>We’re surrounded by advertising from the moment we wake up: it’s on our coffee cups, on TV, and driving in front of us on the way home. But we can always turn it off or tune it out.</p><p>Augmented reality (AR) is the new way of layering digital experiences onto our analog world.</p><p><span style='line-height: 1.42857;'>Someone will set boundaries in AR. Maybe there will be special districts without advertising. Maybe buildings will charge for the placement of an AR banner, or maybe it’ll fall under free speech. It’s difficult to predict this early on, but I think the future will be a lot more colorful and active.</span><br></p><p>When you’re designing and developing new apps, explore new interaction models — don’t reach into an old bag of tricks that were designed for a different time.</p><p><br></p><h4>Learning from the past</h4><p>Let’s take a trip back to the early 2000s: websites were 800x600, tables ruled, and a new form of advertising was on its way to becoming the most hated thing online since the dancing baby from Ally McBeal.</p><p>Pop-up ads.</p><p>Pop-ups took a direct-mail approach to capturing impressions by attempting to monopolize a person’s field of view. Referring to a pop-up that automatically started playing audio, a Nielsen Study test user wrote:</p><p>“IF ANYTHING COULD BE WORSE THAN POP-UPS, THIS IS IT. I HATE THIS AD. HATE HATE HATE.”</p><p>As we figure out how to communicate in the added dimension of AR, things are going to be messy. But this time around, let’s ditch pop-ups and clumsy advertising in favor of great user experience.</p><p>How to reach people in AR without being obnoxious:</p><p>-Learn and respond to a user’s social rhythm</p><p>-Use opt-in instead of all-in</p><p>-Listen to behavioral clues to interpret interest</p><p>-Use current low-impact methods like push notifications</p><p>-Build on real-world, physical advertising models like out-of-home marketing</p><p>-Fearlessly explore new modes of communication</p><p>Someone will set boundaries in AR. Maybe there will be special districts without advertising. Maybe buildings will charge for the placement of an AR banner, or maybe it’ll fall under free speech. It’s difficult to predict this early on, but I think the future will be a lot more colorful and active.</p><p>When you’re designing and developing new apps, explore new interaction models — don’t reach into an old bag of tricks that were designed for a different time.</p>",
   banner_image_url: "http://res.cloudinary.com/efreezy/image/upload/v1445450868/humaneAR_z75wf1.png"}
])
User.find_by_username("InVision").stories[0].tags = [Tag.find_by_name("technology"), Tag.find_by_name("Augmented Reality")]
User.find_by_username("InVision").stories[0].all_users_who_recommend =
    [User.find_by_username("Chris Stang"),
      User.find_by_username("sparks"),  User.find_by_username("Luks Piekut")]

User.find_by_username("The Academy").stories.create!([
  {title: "Technology and The Evolution of Storytelling",
   body: "<p>It is such an exciting time to be a filmmaker.</p><p>I do not believe the notion that the cinema is dying or dead because it’s amazing what technology can do to the cinematic storytelling.</p><p>What’s great about film is it constantly reinvents itself. It started as a sheer novelty, those images moving on the screen.</p><p>Then it went and every step of the way a new technology started being added — sound, color.</p><p>What happens is the film grammar of storytelling evolves and changes as well. The technology goes directly with the evolution of the storytelling.</p><p>The way films look —it started with old 35mm motion picture cameras, to color with the three-strip Technicolor, to cameras that weighed hundreds of pounds and had to be on dollies and cranes — that was the film grammar of the day.</p><blockquote><i>The limitations of the technology being used to shoot the films set up what we’ve learned as film grammar.</i></blockquote><p>Then, we came to lighter cameras, to handheld cameras, steady cams, and on and on, all the way down to now.</p><p>Very, very, <i>very</i> important: Do not work in a vacuum.</p><p>You have to surround yourself with trusted people. You get so immersed in your work, you will not be able to see the forest from the trees. Frankly, you’ll be studying the pine needles and worrying about them.</p><p>You need someone to help you back up and take a look at the forest and see where things are working or not working.</p><p>And you need to surround yourself with people whose judgment you trust and they can be brutally honest with you.</p>",
   banner_image_url: "http://res.cloudinary.com/efreezy/image/upload/v1445911509/woody_mqvcbj.jpg"}
])

User.find_by_username("The Academy").all_followings = [
  User.find_by_username("Evan Freethy"),
  User.find_by_username("InVision"),
  User.find_by_username("Luks Piekut")
]

User.find_by_username("The Academy").stories[0].tags = [Tag.find_by_name("technology"), Tag.find_by_name("art")]
User.find_by_username("The Academy").stories[0].all_users_who_recommend =
    [User.find_by_username("Chris Stang"),
      User.find_by_username("sparks"),  User.find_by_username("Luks Piekut")]

User.find_by_username("Evan Freethy").stories.create!([
  {title: "Augmented Reality - Beyond the First-Down Line",
   body: "<p>The military is using it to train their off-site troops. Medical Doctors are implementing it to visualize and resect tumors in practice. IKEA has adopted it to help customers see how furniture would look in their homes. Apple recently claimed several patents in an attempt to safeguard a stake in the sector, and Google is developing a mobile device that is tailored for it.</p><p><b>So, what exactly is 'it'? </b></p><p>Well, most generally, “it” is Augmented Reality, or AR for short. The term alone though provides little insight into the scale or scope of this technology. I have seen many applications for it so far, but for newcomers, the question remains: Why is it adding value across so many verticals, and why it is seeing such rapid growth (current projections peg the industry to be valued at nearly 2 billion dollars by 2015). As someone who works at Metaio to bring some of the most ambitious and complex AR projects to market, I spend a lot of time answering these questions for individuals who have high interest in augmented reality, but struggle understanding it in a broader context. In the coming weeks I intend to shed light on this topic via LinkedIn postings, providing a sort of ad hoc solution to an apparent demand for industry knowledge amongst the professionals in my network. Without further ado, here's the plain and simple about a technology that is currently finding its place in our world, and how we're quickly realizing that it’s place is everywhere.</p><p><b>Where do we see augmented reality?</b></p><p>For those of you who spend your Monday nights cheering (and sometimes criticizing) your favorite football teams, then augmented reality is all too familiar. The bold yellow line that commonly represents a first down is in fact augmented on top of the field, serving as a useful marker to compare with a team’s yardage. The line does not in fact exist in reality, but is digitally painted into the video feed, adding much a much appreciated visual representation of that invisible concept that is the “Down Line”. Augmented reality in sports is so useful, in fact, that it has become an industry standard for all professional and collegiate football games, and has since been adapted for enhanced viewing with other sports as well, such as basketball, tennis, and hockey to name a few.</p><p>Regardless of whether or not you watch sports, the principle behind the example is of importance here. Augmented reality technology lets you see important additions to reality in tandem with what you see naturally. It enhances your reality with digital content, and, to be frank, it’s damn useful. </p><p>AR software has reached a level of sophistication that demands the attention of some of the largest companies which exist today, not to mention the military. In terms of what information we can digitally paint into the real world, the technology has made it far beyond that yellow first down line. We can now take just about any information that exists in the digital world and place it as contextually relevant places in our real world. </p><p>And the kicker? All of this can be achieved with the smart phone in your pocket.</p><p>In the coming posts I will go in depth across the most relevant applications we are seeing with AR today, as well as provide useful examples, metrics, and information regarding its most recent areas of growth. So for now, stay tuned.</p>",
   banner_image_url: "http://res.cloudinary.com/efreezy/image/upload/v1445451937/first-down-line_y65tb9.jpg"},
   {title: "NASA Makes a Move in Computer Vision",
    body: "<p>The moon landing, the Hubble Telescope, the International Space Station, and the Mars Rovers are but a fraction of NASA’s accomplishments since its inception in 1958. Today they continue a legacy of innovation and research in the aerospace setting, and most recently have moved their focus to the augmented reality and computer vision space. After a brief stint with google glass, they conducted an extensive survey of the possible platforms to test augmented reality applications with, and concluded on a company which has spent the last six years developing government and enterprise grade smart glasses, Osterhout Design Group, or ODG for short.</p><p><b>About ODG</b></p><p>ODG is a company firmly planted in the Augmented Reality hardware space. For the past six years they have been developing state of the art eye-wear for government and enterprise which projects digital information to the user from within the lenses themselves. What is most exciting about these shades is what they inherit from their military upbringings. HD stereoscopic dual displays, a Snapdragon™ 805 processor, 9-axis inertial measurement unit, and a high speed autofocus camera are but a few items on the long list of credentials for the specs, which happen to fairly light, weighing in at 125 grams.</p><p><b>So what?</b></p><p>Where these glasses truly shine is in their ability superimpose visually intuitive information and instructions to the user on top of complex physical systems. For NASA, this means astronauts will be able to perform procedures with precise visual guidance, reducing any potential errors or ambiguities that occur when referring to paper check lists.</p><p><br></p>",
    banner_image_url: "http://res.cloudinary.com/efreezy/image/upload/v1445636156/nasaODG_mpvxq6.png"},
    {title: "Google's Plan to Conquer Space and Motion",
     body: "<p>In this post I will turn my attention to Google, taking a closer look at the multi-billion dollar company’s relationship with computer vision and augmented reality. My company, Metaio, integrates our software on every hardware platform we can get our hands on, and Google has been a huge enabler for pushing AR applications into the mainstream and getting the technology to you, the end user.</p><p><b>Glass </b></p><p>Google turned many heads with the introduction of the ‘Google Glass’, and despite mixed reviews, the project was a huge step forward in the adoption of head-worn augmented reality technologies. Metaio’s proprietary AR software has been made compatible for the device and will support virtually every type tracking we provide, from 2D all the way to 3D object tracking without the need of markers. Our main challenge with current glass models has been with our software straining the processors and battery life, however the next iteration will be more efficient in both of these areas. Many believe that ‘Google Glass’ was the full extent of Google’s relationship with augmented reality, but Google is forging the path of AR in other areas as well - some more ambitious than others.</p><p><b>Word Lens</b></p><p>In Spring of 2014 Google purchased the Augmented Reality company Quest Visual. This company is most notable for producing ‘Word Lens’ - an application that translates words and places them seamlessly on the page a user is reading, through the use of the mobile device’s camera feed. Google plans to integrate this software with the large language coverage they support via Google Translate - and have since added ‘Google Glass’ compatibility.</p><p><b>Project Tango</b></p><p>In another computer vision project that is arguably as ambitious as ‘Glass’, Google has developed a mobile device unlike anything of it’s kind.</p><p>'The goal of project Tango is to give mobile devices a human-scale understanding of space and motion.' - Johnny Lee, Project Tango Team</p><p>Their mission is to create a phone that is capable of sensing its surroundings - and it uses some pretty state of the art software to get the job done. Equipped with a depth sensing camera, the phone is capable of generating 3D maps of its surroundings while simultaneously tracking its position within a scene. What this means for augmented reality is that environments can be recognized and tracked with great accuracy and precision. Metaio has already commenced development on the platform, and will be ready to leverage the strengths of the platform when it reaches end users.</p><p>Mobile devices will undoubtedly reach higher and higher levels of sophistication in coming years, and when such devices hit mass market we will see an assortment of augmented reality applications follow suit. Although it is in it’s infancy, Project Tango has established potential to be an inflection point of innovation, as it puts forth the attitude that we should push the limits of what our mobile devices are capable of doing for us. Metaio will do it’s part to ensure that the best computer vision and augmented reality software is ready when this these kinds of ambitious hardware projects get into the hands of the wider audience.</p>",
     banner_image_url: "http://res.cloudinary.com/efreezy/image/upload/v1445910747/google-motion_mqeeja.jpg"}
])
User.find_by_username("Evan Freethy").stories[0].tags = [Tag.find_by_name("technology"), Tag.find_by_name("Augmented Reality"), Tag.find_by_name("Computer Vision")]
User.find_by_username("Evan Freethy").stories[0].all_users_who_recommend =
    [User.find_by_username("Chris Stang"), User.find_by_username("InVision"),
      User.find_by_username("sparks"),  User.find_by_username("Luks Piekut")]

User.find_by_username("Evan Freethy").stories[1].tags = [Tag.find_by_name("Nasa"), Tag.find_by_name("space"), Tag.find_by_name("Computer Vision")]
User.find_by_username("Evan Freethy").stories[1].all_users_who_recommend =
    [User.find_by_username("Chris Stang"), User.find_by_username("InVision"),
      User.find_by_username("sparks"),  User.find_by_username("Luks Piekut")]

User.find_by_username("Evan Freethy").stories[2].tags = [Tag.find_by_name("technology"), Tag.find_by_name("Google"), Tag.find_by_name("Computer Vision")]
User.find_by_username("Evan Freethy").stories[2].all_users_who_recommend =
    [User.find_by_username("Chris Stang"), User.find_by_username("InVision"),
      User.find_by_username("sparks")]

User.find_by_username("Evan Freethy").all_followings = [
  User.find_by_username("The Academy"),
  User.find_by_username("InVision"),
  User.find_by_username("sparks"),
  User.find_by_username("Luks Piekut")
]
