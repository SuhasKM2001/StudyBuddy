import "../Learning_Hub/Social_science.css";
function SocialPage()
{
    return(
        <div className="social_main_file">
      <h1 className="maths_heading_styling">Social Science</h1>

      <h3 className="maths_liveclass_heading_style">Upcoming Live Session</h3>

      <div className="maths_liveclass_style">
        <p className="maths_liveclass_text_style">Date: 03/02/2023</p>
        <p className="maths_liveclass_text_style">Time: 6 PM</p>
        <p className="maths_liveclass_text_style">Topic: History</p>
        <button className="maths_button_style">
                <a href="https://us04web.zoom.us/j/73627965522?pwd=Wsph2oaAceufVkzzI2gMs2HC1XhIot.1
" target="_blank" className="maths_link_style">
                    <span className="session_style">Join the session</span>
                </a>
        </button>
      </div>

      <h2 className="maths_topic_heading_style">Resources</h2>
      <section className="maths_topic_style">
        <div className="maths_subtopic1_style">
          <a href="https://youtu.be/pMkwvp-6V1M" target="_blank" className="maths_link_style1">
            <span className="resource_style">Industrilization</span>
          </a>
        </div>

        <div className="maths_subtopic2_style">
          <a href="https://youtu.be/ISwEFUcgXCg" target="_blank" className="maths_link_style1">
            <span className="resource_style">Globilization</span>
          </a>
        </div>

        <div className="maths_subtopic3_style">
          <a href="https://youtu.be/d7CWNk1CCIU" target="_blank" className="maths_link_style1">
            <span className="resource_style">Water Resource</span>
          </a>
        </div>
      </section>

      <h2 className="maths_expertise_heading_style">Expertise</h2>
      <section className="maths_expertise_style">
        <div className="maths_subexpertise1_style">
          <div className="maths_subexpertise_contact_style">
            <img
              className="maths_avatar"
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Avatar"
            />
            <div>
              <p className="maths_contact_styling">Name: Peter</p>
              <p className="maths_contact_styling">Contact: 9876543210</p>
            </div>
          </div>
        </div>

        <div className="maths_subexpertise2_style">
          <div className="maths_subexpertise_contact_style">
            <img
              className="maths_avatar"
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Avatar"
            />
            <div>
              <p className="maths_contact_styling">Name: Tony</p>
              <p className="maths_contact_styling">Contact: 9786543210</p>
            </div>
          </div>
        </div>
        <div className="maths_subexpertise3_style">
          <div className="maths_subexpertise_contact_style">
            <img
              className="maths_avatar"
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="Avatar"
            />
            <div>
              <p className="maths_contact_styling">Name: Steve</p>
              <p className="maths_contact_styling">Contact: 9678543210</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    );
}

export default SocialPage;