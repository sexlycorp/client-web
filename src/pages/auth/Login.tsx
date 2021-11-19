import { FormEvent, FunctionComponent } from "react";
import { Link } from "react-router-dom";
import LightButton from "../../components/elements/Buttons/LightButton";
import LightFormControlGroup from "../../components/elements/Forms/LightFormControlGroup";
import LightTextInput from "../../components/elements/Inputs/LightTextInput";
import routes from "../../config/routes";

const LoginPage: FunctionComponent = () => {
    // utils
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }


    return (
        <div className={`bg-purple-50 h-screen w-screen flex flex-col items-center justify-center`}>
            <div className={`text-3xl font-semibold text-purple-500 -mt-10`}>
                Log In
            </div>
            <form onSubmit={handleSubmit} className={`w-10/12 mt-4 flex flex-col items-center justify-center`}>
                <div className={`rounded-xl px-4 py-3 w-full shadow-2xl`}>
                    <div>
                        <input
                            type={`email`}
                            className={`w-full text-xs text-gray-800 pb-1 border-b border-gray-400 bg-transparent px-1`}
                            placeholder={`Email`}
                        />
                    </div>
                    <div className={`mt-5`}>
                        <input
                            type={`password`}
                            className={`w-full text-xs text-gray-800 pb-1 border-b border-gray-400 bg-transparent px-1`}
                            placeholder={`Password`}
                        />
                    </div>
                </div>
                <div className={`mt-3`}>
                    <LightButton
                        button={{
                            text: `Login`,
                            type: `submit`
                        }}
                    />
                </div>
            </form>
            <div className={`mt-5`}>
                <span className={`text-xs text-gray-500 mr-2`}>
                    Don't have an account?
                </span>
                <Link to={routes.signup} className={`text-pink-500 font-semibold text-xs`}>
                    Sign up here
                </Link>
            </div>
        </div>
    );
}

export default LoginPage;