import  Navbar  from './Navbar';
import './css/People.css';
import Accordion from './Accordion';
import  Footer  from './Footer'

function Forms() {
  // Used to securely open an external link in a new tab (https://stackoverflow.com/questions/45046030/maintaining-href-open-in-new-tab-with-an-onclick-handler-in-react)
  /*const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }*/

  return (
    <div className="people-page">
      <Navbar/>

      <div className="people-intro">
        <div className="people-hero">
          <img className="people-hero-img" src="https://dummyimage.com/368x200.jpg"/>
          <p className="people-hero-text">Anthony Sokry was Here, Lorem Lorem Lorem</p>
        </div>
        <hr className="people-intro-line"/>
        <p className="people-intro-text">The Cadre Mentorship Program is an academic leadership program that helps Digital Media Arts students thrive in thier careers at San Jose State University and beyond.</p>
      </div>

      {/* <div className="people-intro">
          <img className="people-hero-img" src="https://dummyimage.com/368x200.jpg"/>
          <p className="people-hero-text">Jorge the guy was Here, ipsum ipsum ipsum</p>
          <hr className="people-intro-line"></hr>
          <p className="people-intro-text">The Cadre Mentorship Program is an academic leadership program that helps Digital Media Arts students thrive in thier careers at San Jose State University and beyond.</p>
      </div> */}

      <div className="people-body">
        <h1 className="people-body-title" style={{backgroundColor: "#ffffcd"}}>Mentors</h1>
        <div className="people-body-mentor-grid">
          {/* copy from here */}
          <div className="people-body-card">
            <div className="people-body-card-img">
              <img src="https://dummyimage.com/150x150.jpg"/>
            </div>
            <a className="people-body-card-name" href="https://clb-bfa-portfolio.netlify.app/" target="_blank">Clay Bedinger</a>
            <Accordion content={`Our digital age is full of opportunity for those with the skill to wield it, for better or worse. As a digital media artist, I choose better. My return to San Jose State is defined by a burning desire to finish my studies and begin making my mark on the world - leaving everything in my path better than when I found it. My goal is to use my freedom of thought to harness the powerful tools, knowledge, and networks available in the information age to make the future a better place, improving experiences for people around the world. \n\nIn digital art practice, I am drawn to data visualization, user experience research and design, and technical writing. I am actively preparing myself for a career in these fields, seeking opportunities to use my talents as a tangible force for good in the world. Whether designing a new way to re-enable a disability, visualizing data to draw attention to a societal problem, or translating difficult technological concepts into plain, engaging language for everyone to learn about and understand, I intend to stake a claim on the digital frontier in the name of those who cannot.`}/>
          </div>
              {/* to here  */}
              
          <div className="people-body-card">
            <div className="people-body-card-img">
              <img src="https://dummyimage.com/150x150.jpg"/>
            </div>
            <a className="people-body-card-name" href="https://www.rcentinaje.com/portfolio" target="_blank">Rachel Centinaje</a>
            <Accordion content={`I’m Rachel Centinaje, a digital media artist working video, motion graphics, 3D modeling, and illustration. Art has helped me gain insight about the world and myself. A lot of my inspiration comes from digital artists, nostalgia, film, video games, and pop culture. When I consume things, I like to remix it to form my interpretation. Digital artists Jonathan Zawada, Quentin Deronzier, and Kim Laughton influence my works because it looks dreamlike, whimsical, and odd, transporting the viewer to an unfamiliar world, but at the same brings out familiarness. It inspires me to create art and reflect that in my own style and works. My current work explores the relationship between digital technology and culture along with the psychological effects it has on us, especially with this odd transition between the old world and new technology.`}/>
          </div>

          <div className="people-body-card">
            <div className="people-body-card-img">
              <img src="https://dummyimage.com/150x150.jpg"/>
            </div>
            <a className="people-body-card-name" href="https://asokry.github.io/" target="_blank">Jordan Hoekwater</a>
            <Accordion content={`My work as an artist explores the multi-fascinated manipulation of art processes in multimedia. My passion enables me to quickly learn and adapt within a constantly developing digital world. My goal as an artist is to give my audience insight into perspectives outside of their native views, in the hopes of inspiring new and interesting critiques on the world around us.`}/>
          </div>

          <div className="people-body-card">
            <div className="people-body-card-img">
              <img src="images/sabrina.jpg"/>
            </div>
            <a className="people-body-card-name" href="https://www.sunshinesab.com/" target="_blank">Sabrina Kwong</a>
            <Accordion content={`Sabrina is a rising senior that aspires to be a working artist and designer. Identifies as a first-generation college student, an Asian American, and a learner. She works with traditional and digital mediums in order to understand the human condition and roles that technology plays in our world.`}/>
          </div>

          <div className="people-body-card">
            <div className="people-body-card-img">
              <img src="images/ray.jpg"/>
            </div>
            <a className="people-body-card-name" href="https://asukabaka.github.io/" target="_blank">Raymond Lam</a>
            <Accordion content={`While working as a concept artist for a motorsports illustration company with clients like Honda and Porsche, Lam has industry experience with creating powerful visual narratives in distilled sketches for stages of quick iterations and final proposals. his recent illustrations for notable skateboard and apparel companies feature striking exploration of contrasts through cyberpunk visuals. They demonstrate technical skill, highly detailed illustrations and sharp graphic design for presentation.`}/>
          </div>

          <div className="people-body-card">
            <div className="people-body-card-img">
              <img src="images/ranz.png"/>
            </div>
            <a className="people-body-card-name" href="https://ranzocampo.github.io/website/portfolio.html" target="_blank">Ranz Ocampo</a>
            <Accordion content={`My practice sums up how I create my own worlds through illustrations and video art, in which I work versatile with any digital medium that fits the theme of the narration I want to explore and present.  The uniqueness of my practice is highlighted through extracting and taking advantage of these technological advances to create my own narrative that will capture and engage the viewers.  My practice has taught me how to be patient with myself and my work and not everything is going to work in my favor because I am working with a machine.  As a digital media artist, it forced me to be more flexible and be able to adapt in situations where things can become finicky, and overcoming situations like that inspires me to push myself and motivates me to work harder in my future works.   It is important to me because it makes me who I am as a person that is extremely passionate about the creation and the process of my work.  The medium I mainly focus on is digital paintings, but I am passionate about other mediums as well such as video, photo, physical painting, and drawing.  MAYA is a great 3D program that I was fortunate to learn because of the overwhelming amount of fantastic features that it offers in order to create awesome 3D models and later animating them.  This was a great opportunity to showcase my creative skills because I do not have any experience with 3D and I have always worked with 2D`}/>
          </div>          
          
          <div className="people-body-card">
            <div className="people-body-card-img">
              <img src="images/cole.PNG"/>
            </div>
            <a className="people-body-card-name" href="https://colepergerson.studio/" target="_blank">Cole Pergerson</a>
            <Accordion content={`Cole Pergerson creates computer games that tell stories through gameplay and engages the player with thoughtful challenges. Instead of writing a complete story, Cole lets the player create their own story, by playing the game. Every challenge is a critical point of an incomplete story and it is up to the player to finish it. For Cole, gameplay isn't just a set of fun actions, it is a language that allows players to tell their own story.`}/>
          </div>

          <div className="people-body-card">
            <div className="people-body-card-img">
              <img src="images/victoria.JPG"/>
            </div>
            <a className="people-body-card-name" href="https://victoriaserrato.github.io/" target="_blank">Victoria Serrato</a>
            <Accordion content={`I am an artist who works primarily in digital media, as well as painting, sculpture, and traditional illustration. My works explore themes such as identity, emotions, reality, and translations of phenomena into a visual, mostly digital, spaces.`}/>
          </div>

          <div className="people-body-card">
            <div className="people-body-card-img">
              <img src="images/tyler.png"/>
            </div>
            <a className="people-body-card-name" href="https://tylerstannard.weebly.com/" target="_blank">Tyler Stannard</a>
            <Accordion content={`Tyler Stannard's practice involves interdisciplinary methods with a focus of exploring and creating virtual worlds. Virtual gardener has been a term he has floated around for awhile, and understanding his self more through the expression of 3D generated environments. This practice has blurred into the real world where images, objects, nature, and commodities can be transferred back and forth between virtual and physical realities. The power to transport viewers to other realities, social, visual, and experimental has captivated the artist over his life time. During his artistic practice and time behind the screen, nature has appeared to be a reoccurring motif, a sort of call back to nature from this constant cycle of "working to live", or better put "live to work". Digital art and technologies allow us to better understand ourselves, connect, and learn in this modern era to see what is beyond the flat screen. Tyler hopes to provoke engagement and curiosity in his work to evoke the desire to create and learn more.`}/>
          </div>

          <div className="people-body-card">
            <div className="people-body-card-img">
              <img src="images/laurie.jpg"/>
            </div>
            <a className="people-body-card-name" href="https://laurieytakeda.github.io/" target="_blank">Laurie Takeda</a>
            <Accordion content={`My work reflects the way I perceive the world through the digital medium of videography and photography. It's informed by different destinations and personal experiences during my lifetime filtered through expression. I attempt to contemplate on different perspectives, focusing on how conceptually, everything that's built upon the foundation of the earth can be made into art. I’m inspired by those that I interact with, or the essence of a destination. I gather content through videos of friends while we hang out, or creating montages of places that I've traveled to with family, capturing candid moments and movements of the subject at hand. Conceptually, I think about the interchangeable thoughts of media through photography and videography from different environments and subjects that are presented through the livelihood of a person. Photography and videography allow for further interpretation of scenes that are placed before the viewer and myself as an artist. I've been inspired by Andy To, a videographer/photographer from Oakland, who creates cinematic content from the places that he has travelled to through the lens of a camera, both with creating a space where the viewer feels as if they’re experiencing the space as if they’re actually there, and through the aesthetics of how the pieces are put together as a whole. From my work, I want the viewers to be able to make connections to their own lives, experiencing the work as if they’re physically in that space, and seeing my art as a way to open their minds to other perspectives and insight towards life.`}/>
          </div>

          <div className="people-body-card">
            <div className="people-body-card-img">
              <img src="images/heru.JPG"/>
            </div>
            <a className="people-body-card-name" href="https://heruwangdesign.com/" target="_blank">Heru Wang</a>
            <Accordion content={`I am a multidisciplinary artist using a variety of tools to tell stories on digital platforms. My practices involve using Adobe Creative Suites, Maya and coding to express emotions that resonate with the audience. I draw inspiration from people around me who struggle with anxiety; my work provides a space for these people struggling with fast paced life. I use images and virtual reality environments to bring emotions to life virtually and communicate with my audience through interactions. Many stories and imaginations are hard to describe with words or other mediums. However, through technology and digital formats, stories become more vivid and deliverable. By enabling interaction, users are able to explore and find the clues by themselves. \n\nMaking VR scene is a new adventure to me that contains excitement, hardships, and victory. Even though my experience with A-frame and three.js is quite new, I tried to make every piece of my idea come true despite how hard it is to develop on A-frame. Doing countless research on different three.js libraries and carefully arranging the scene in A-Frame are valuable moments to me since it helps me to learn things quickly and defeat problems without doubts. This working pattern of solving problems keeps my skills fresh and my mind sharp.\n\nMy momentum of making art comes from my desire of connecting with others and helping others. It will be my lifelong mission to listen to people’s stories and make art with empathy.`}/>
          </div>
        </div>


          {/* MENTEE  */}
        <h1 className="people-body-title" style={{backgroundColor: "#cfffcd"}}>Mentees</h1>
        <div className="people-body-mentor-grid">
          <div className="people-body-card">
            <div className="people-body-card-img">
              <img src="images/christian.jpg"/>
            </div>
            <a className="people-body-card-name" href="https://asokry.github.io/" target="_blank">Chirstain Acosta</a>
            <Accordion content={`The 1st time I started drawing was in elementary. I started making short funny comics for my friends then advanced to animation and storytelling in high school and college. If I can get people feel and emotion through my art, then I have made a successful one.`}/>
          </div>

          <div className="people-body-card">
            <div className="people-body-card-img">
              <img src="images/alyssa.png"/>
            </div>
            <a className="people-body-card-name" href="https://the-tables-flipped.glitch.me/index.html" target="_blank">Alyssa Castenada</a>
            <Accordion content={`Alyssa Castaneda is a digital media artist who creates works such as memes and image mashups, as well as non-narrative low fidelity films. She is comfortable using Abode software such as Photoshop and Premiere, the Sony Vegas series, and Procreate. Her line of works can be considered ironic, niche, and questionable. The goal of all her creations is to examine American beliefs and provide socio-economic commentary in a humorous manner. Alyssa proposes the questions, "Is technology really ruining our lives? Why are we so obsessed with Funko Pops? And how is Hello Kitty a symbol for anarchy?`}/>
          </div>

          <div className="people-body-card">
            <div className="people-body-card-img">
              <img src="images/cameron.JPG"/>
            </div>
            <a className="people-body-card-name" href="https://cameronchung.github.io/GlitchPortfolio/index.html" target="_blank">Cameron Chung</a>
            <Accordion content={`Cameron Chung grew up knowing that people who looked like her only entered the fields of technicality. It was the help of her mother that she grew a passion for art. When Cameron was a little girl, she experimented with different extracurricular activities and found that the activities that represented creative expression is what resonated with her the most. She found herself loving to draw even though she thought everything she drew was ugly. It was not until high school that she truly understood what kind of artist she wanted to be. She is constantly exploring her style and changing her taste. Cameron believes that change is the only way to develop and evolve as an artist and seeks to learn something new every day. Cameron Chung typically creates portraits in the style of pointillism and Adobe programs for digital illustrations however, senior year of high school, Cameron explored some computer science principles and found the world of art in technology, so she is now learning more about the coding realm of creativity and plans to use this knowledge in her future career routes.`}/>
          </div>

          {/* <div className="people-body-card">
            <div className="people-body-card-img">
              <img src="https://dummyimage.com/150x150.jpg"/>
            </div>
            <p className="people-body-card-name" href="https://asokry.github.io/" target="_blank">Pegah Taheri Eilaghi</p>
            <p className="people-body-card-text">The Cadre Mentorship Program is an academic leadership program that helps Digital Media Arts students thrive in thier careers at San Jose State University and beyond.</p>
          </div> */}

          <div className="people-body-card">
            <div className="people-body-card-img">
              <img src="images/sophia.jpg"/>
            </div>
            <a className="people-body-card-name" href="https://asokry.github.io/" target="_blank">Sophia Gillenberg</a>
            <Accordion content={`Sophia's work's purpose is to create a bridge, between the real world and the world of her imagination.  Sophia has struggled since birth with finding a means of communication between the two worlds due to several learning disabilities. Through art she is able to communicate without any boundaries, creating a safe place for self expression. From a young age she was told she couldn’t at every new venture. Sophia now strives to not only show that she can but, to show that she can flourish, proving that she is not defined by her disability. Through art she is able to communicate without any boundaries, expressing the real unaltered force behind her art.`}/>
          </div>

          <div className="people-body-card">
            <div className="people-body-card-img">
              <img src="images/charles.jpg"/>
            </div>
            <a className="people-body-card-name" href="https://asokry.github.io/" target="_blank">Charles Graciano</a>
            <Accordion content={`Charles is an artist in visual communication and Digital Media Graphics. Motion graphics fascinate him the most when digital media is involved. While studying in San Francisco, he learned a lot about the involvement with media graphics. He has experience with traditional animation and was trained by active motion picture professionals who served and are currently in the in the entertainment industry. He's working towards developing his content and elaborate his concepts into productions. A lifetime goal of his is to collaborate his concepts and skills with the Walt Disney Company and Pixar to create character development, graphic design and digital editing.`}/>
          </div>

          <div className="people-body-card">
            <div className="people-body-card-img">
              <img src="images/deanna.jpg"/>
            </div>
            <a className="people-body-card-name" href="https://asokry.github.io/" target="_blank">Deanna Gutierrez</a>
            <Accordion content={`Deanna loves creating different kinds of art by experimenting with a range of both traditional and digital mediums. Despite having more experience in studio art, she hopes to grow as a digital artist as well. Her goal as an artist is to inspire others and bring them the same wonder that other artists have brought her. Her greatest motivations for art is the experience of creation, self expression, and video games. Video games have been a great source of inspiration for her for most of her life. She graduated from Clovis Community College with an AA in Studio Arts, and has experience in creating digital illustrations using Autodesk Sketchbook and modeling 3D objects using Blender. She has also been experimenting with Adobe Lightroom and Premiere. Her career goal is to graduate with a BFA in Digital Media Art as a game designer.`}/>
          </div>

          <div className="people-body-card">
            <div className="people-body-card-img">
              <img src="images/yeab.jpg"/>
            </div>
            <a className="people-body-card-name" href="https://yeabberhanu.wixsite.com/yeabd" target="_blank">Yeab Kebede </a>
            <Accordion content={`Born and raised in a country which embraces the dynamic of colors, patterns and magical folk stories, I am subconsciously attracted to colorful textiles and patterns. As a young child walking through the streets of Ethiopia, I remember that the colors not only had a life of their own but had a distinct smell. As a multi-medium artist I am inspired by my early on relationship with colors and patterns in addition to life itself. I use a wide array of means from traditional painting and drawing to more moderns was like illustration, video, photography and digital media art.`}/>
          </div>

          <div className="people-body-card">
            <div className="people-body-card-img">
              <img src="images/derek.png"/>
            </div>
            <a className="people-body-card-name" href="https://kwokderek.wixsite.com/portfolio" target="_blank">Derek Kwok</a>
            <Accordion content={`Derek incorporates a lot of his hobbies and personal interests into his artworks. Alongside pop culture and modern art, Derek enjoys creating minimalist designs and pieces.`}/>
          </div>

          <div className="people-body-card">
            <div className="people-body-card-img">
              <img src="images/catherine.jpg"/>
            </div>
            <a className="people-body-card-name" href="https://asokry.github.io/" target="_blank">Catherine Thy Le</a>
            <Accordion content={`As an artist, Catherine avoids confining her abilities into a single box. Digital and traditional mediums are all fair game for her. She uses mediums that attract her attention and those in which she would like to hone in her skills with. The same can be said regarding her subject matter. She creates artwork based off of what captures her eye and piques her interest. Recreation of landscapes, people, objects, all can be rendered through her own personal lens. With her art, Catherine wants to offer the viewer an emotional experience, regardless of how big or small. Whether it be happiness, tranquility, sadness, anger, awe, or comradery, she wants her art to be a capsule for those emotions. Catherine believes that the beauty of art lies within how it is able to connect complete strangers regardless of their identity and background and would like to provide an open and welcoming space like this for individuals in the future.`}/>
          </div>

          <div className="people-body-card">
            <div className="people-body-card-img">
              <img src="images/van.png"/>
            </div>
            <a className="people-body-card-name" href="https://vanng9797.glitch.me/index.html" target="_blank">Van Nguyen</a>
            <Accordion content={`There are many ways for artists to create or to express themselves through their works. As a Digital Media Art student artist, Van's main language of art is through videos. She is always fascinated with the beauty of storytelling, motions and concepts in video art, her goal is to create videos which can convey stories and certain feelings to the audience. Van loves seeing creative mixtures in an art piece. She highly appreciates the combination of visual and audio, as well as a collaboration between traditional and digital arts. Therefore, she believes that music, promotional videos, motion graphics and short animations are what she needs to focus on in order to expand her skills and creativity.`}/>
          </div>

          <div className="people-body-card">
            <div className="people-body-card-img">
              <img src="images/cindy.jpg"/>
            </div>
            <a className="people-body-card-name" href="https://cindyrtan.github.io/" target="_blank">Cindy Tran</a>
            <Accordion content={`As a self-taught artist, Cindy started off having no specialized knowledge or skills. However, she became intrigued with the concept of creating art in an unfamiliar and complex space. Despite her artistic experience originating from the realm of traditional art, her skills and studies vary across a spectrum. Currently, she enjoys exploring new ways to approach art through diverse means such as coding, 3D modeling, web designing, and creating digital image compositions. With artistic exploration and experimentation, Cindy aspires to learn and expand her creations beyond mundane and conventional means. She believes that art reaches far beyond a flat canvas, holding universal truths, and ignites immersive and interactive experiences that simply cannot be defined in a singular form.`}/>
          </div>
        </div>

        


        {/* COMMITTEE  */}
        <h1 className="people-body-title" style={{backgroundColor: "#ccf7fe"}}>Committee</h1>
        <div className="people-body-mentor-grid">
          <div className="people-body-card">
            <div className="people-body-card-img">
              <img src="images/lchun.jpg"/>
            </div>
            <p className="people-body-card-name" href="https://asokry.github.io/" target="_blank">Lauren Chun</p>
            <Accordion content={`Lauren Chun is a digital media artist and senior in the BFA Digital Media Art major. Lauren specializes in 3D forms in virtual and physical spaces. She is currently the VP of CADRE SO, and Chair of ACM SIGGRAPH Student Chapter at SJSU.`}/>
          </div>

          <div className="people-body-card">
            <div className="people-body-card-img">
              <img src="images/anthony.png"/>
            </div>
            <p className="people-body-card-name" href="https://asokry.github.io/" target="_blank">Anthony Sokry</p>
            <Accordion content={`Anthony is a Digital Media Arts student with a passion and interest in writing code, web development, technology, and game development. He is familiar with popular programming languages such as HTML, CSS, Javascript, Java, and C# as well as possessing experience working with Processing, P5, and Arduino. Anthony strives to be a full fledged game developer with a strong background in programming.`}/>
          </div>

          <div className="people-body-card">
            <div className="people-body-card-img">
              <img src="images/sabrina.jpg"/>
            </div>
            <p className="people-body-card-name" href="https://asokry.github.io/" target="_blank">Sabrina Kwong</p>
            <Accordion content={`Sabrina is a rising senior that aspires to be a working artist and designer. Identifies as a first-generation college student, an Asian American, and a learner. She works with traditional and digital mediums in order to understand the human condition and roles that technology plays in our world.`}/>
          </div>

          <div className="people-body-card">
            <div className="people-body-card-img">
              <img src="images/ray.jpg"/>
            </div>
            <p className="people-body-card-name" href="https://asokry.github.io/" target="_blank">Raymond Lam</p>
            <Accordion content={`While working as a concept artist for a motorsports illustration company with clients like Honda and Porsche, Lam has industry experience with creating powerful visual narratives in distilled sketches for stages of quick iterations and final proposals. his recent illustrations for notable skateboard and apparel companies feature striking exploration of contrasts through cyberpunk visuals. They demonstrate technical skill, highly detailed illustrations and sharp graphic design for presentation.`}/>
          </div>

          <div className="people-body-card">
            <div className="people-body-card-img">
              <img src="images/yeab.jpg"/>
            </div>
            <p className="people-body-card-name" href="https://asokry.github.io/" target="_blank">Yeab Kebede </p>
            <Accordion content={`Born and raised in a country which embraces the dynamic of colors, patterns and magical folk stories, I am subconsciously attracted to colorful textiles and patterns. As a young child walking through the streets of Ethiopia, I remember that the colors not only had a life of their own but had a distinct smell. As a multi-medium artist I am inspired by my early on relationship with colors and patterns in addition to life itself. I use a wide array of means from traditional painting and drawing to more moderns was like illustration, video, photography and digital media art.`}/>
          </div>

          <div className="people-body-card">
            <div className="people-body-card-img">
              <img src="images/van.png"/>
            </div>
            <p className="people-body-card-name" href="https://asokry.github.io/" target="_blank">Van Nguyen</p>
            <Accordion content={`There are many ways for artists to create or to express themselves through their works. As a Digital Media Art student artist, Van's main language of art is through videos. She is always fascinated with the beauty of storytelling, motions and concepts in video art, her goal is to create videos which can convey stories and certain feelings to the audience. Van loves seeing creative mixtures in an art piece. She highly appreciates the combination of visual and audio, as well as a collaboration between traditional and digital arts. Therefore, she believes that music, promotional videos, motion graphics and short animations are what she needs to focus on in order to expand her skills and creativity.`}/>
          </div>

          <div className="people-body-card">
            <div className="people-body-card-img">
              <img src="images/sophia.jpg"/>
            </div>
            <p className="people-body-card-name" href="https://asokry.github.io/" target="_blank">Sophia Gillenberg</p>
            <Accordion content={`Sophia's work's purpose is to create a bridge, between the real world and the world of her imagination.  Sophia has struggled since birth with finding a means of communication between the two worlds due to several learning disabilities. Through art she is able to communicate without any boundaries, creating a safe place for self expression. From a young age she was told she couldn’t at every new venture. Sophia now strives to not only show that she can but, to show that she can flourish, proving that she is not defined by her disability. Through art she is able to communicate without any boundaries, expressing the real unaltered force behind her art.`}/>
          </div>

          <div className="people-body-card">
            <div className="people-body-card-img">
              <img src="images/cindy.jpg"/>
            </div>
            <p className="people-body-card-name" href="https://asokry.github.io/" target="_blank">Cindy Tran</p>
            <Accordion content={`As a self-taught artist, Cindy started off having no specialized knowledge or skills. However, she became intrigued with the concept of creating art in an unfamiliar and complex space. Despite her artistic experience originating from the realm of traditional art, her skills and studies vary across a spectrum. Currently, she enjoys exploring new ways to approach art through diverse means such as coding, 3D modeling, web designing, and creating digital image compositions. With artistic exploration and experimentation, Cindy aspires to learn and expand her creations beyond mundane and conventional means. She believes that art reaches far beyond a flat canvas, holding universal truths, and ignites immersive and interactive experiences that simply cannot be defined in a singular form.`}/>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default Forms;