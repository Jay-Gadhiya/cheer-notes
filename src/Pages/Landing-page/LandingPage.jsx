import "./LandingPage.css";
import heroImg from "../../assets/hero-img.gif"
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/authentication-context";

const LandingPage = () => {

    const { authState } = useAuth();

    return(
        <>
            <main className="main-container">

                <header className="notes-header">
                    <h1 className="hero-title">Cheer Notes</h1>
                    <h3 className="hero-subtitle sub-first mr-top" >Cheers your self</h3>
                    <h3 className="hero-subtitle sub-second">On every note</h3>
                    <p className="description">Manage your daily tasks and workflow in a modern way and boost your efficiency without any efforts.</p>
                    {
                        authState.token 
                        ?
                        <Link to="/home" ><button class="btn btn-primary call-to-action-btn">Create Note</button></Link>
                        :
                        <Link to="/signup"><button class="btn btn-primary call-to-action-btn">Join Now</button></Link>
                    }
                   <Link to="/login" ><p className="acccount-ask"> Already have an account?</p></Link>
                </header>

                <section className="notes-img">
                    <img src={heroImg} alt="img" />
                </section>
            </main>
        </>
    )
  
};

export { LandingPage };