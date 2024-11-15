import { FaGithub, FaGoogle } from "react-icons/fa6";
const SocialLogin = () => {
    return (
        <div className="flex flex-col gap-2" >
            <h2 className="font-semibold mb-3">Login with</h2>
            <button className="btn"><FaGoogle/>Login with Google</button>
            <button className="btn"><FaGithub></FaGithub>Login with Github</button>
        </div>
    );
};

export default SocialLogin;