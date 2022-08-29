import {
	FaFacebookSquare,
	FaTwitterSquare,
	FaMailBulk,
	FaGithub,
} from "react-icons/fa";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Lottie from "react-lottie";
// import * as education from "../assets/animation/education.json";
import * as study from "../assets/animation/study.json";
import { useFormik } from "formik";
import * as Yup from "yup";

// Lottie background setup
const LandingPage = () => {
	const animationOption = {
		loop: true,
		autoplay: true,
		animationData: study,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	// Formic and Yup setup
	const formik = useFormik({
		initialValues: {
			password: "",
			email: "",
			checked: false,
		},
		validationSchema: Yup.object({
			password: Yup.string()
				.required("Password is required")
				.min(6, "Password must be at least 6 characters")
				.max(12, "Password should not exceed 12 characters"),
			email: Yup.string()
				.required("Email is required")
				.email("Email is not valid"),
		}),
		onSubmit: (values) => {
			console.log(values);
			formik.resetForm();
		},
	});

	// console.log(formik.errors);
	// console.log(formik.values);
	console.log(formik);

	return (
		<main className="w-full flex flex-col md:flex-row bg-slate-100 font-montserrat">
			{/* -------- left section------ */}
			<section className="w-full lg:w-[70%] md:w-1/2 text-3xl text-indigo-500 font-bold m-10 mb-5 hidden md:block">
				<img
					src="https://searchingyard.com/assets/img/logo.png"
					className="w-40"
					alt="logo"
				/>

				{/* <img
					src="https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-2/img/login-v2.72cd8a26.svg"
					alt=""
					className="background image"
				/> */}
				{/* Lottie background image */}
				<Lottie
					options={animationOption}
					height={"39.07rem"}
					width={"40rem"}
					style={{ cursor: "default" }}
				/>
			</section>

			{/* -------- right section------ */}
			<section className="w-full lg:w-[30%] md:w-1/2 bg-white p-8 md:p-16 relative">
				<img
					src="https://lh6.googleusercontent.com/-_MnsVJxHpe0/AAAAAAAAAAI/AAAAAAAAAAA/mz37OTqVY1k/s55-p-k-no-ns-nd/photo.jpg"
					className="w-15 md:hidden absolute inset-y-1 inset-x-[8%]"
					alt="logo"
				/>

				<h2 className="text-gray-500 text-2xl m-[-0.2rem] font-medium mt-6 mb-3">
					Welcome to Vuexy! 👋
				</h2>
				<p className="text-gray-500 font-normal text-sm">
					Please sign-in to your account and start the adventure
				</p>

				{/* alert box */}

				<div className="alert bg-violet-100 200 mt-5 p-2 rounded-md relative w-full">
					<AiOutlineQuestionCircle className="absolute inset-y-1 inset-x-[90%] text-indigo-500 text-xl" />
					<p className="text-xs text-indigo-500">
						<span className="text-indigo-500 text-xs font-semibold mr-2">
							Admin :
						</span>
						admin@demo.com | admin
					</p>
					<p className="text-xs text-indigo-500">
						<span className="text-indigo-500 text-xs font-semibold mr-3 leading-8">
							Client :
						</span>
						client@demo.com | client
					</p>
				</div>

				{/* login box */}

				<div className="my-2 flex flex-col ">
					<label className="text-gray-400 text-sm block" htmlFor="">
						Email:
					</label>
					<input
						className={` ${
							formik?.touched?.email && formik?.errors?.email
								? " border-red-400 text-red-500"
								: "border-gray-400"
						} w-full border-2  border-solid rounded-md p-2 placeholder:text-slate-400 text-sm`}
						type="email"
						name="email"
						id="email"
						value={formik?.values?.email}
						placeholder="admin@demo.com"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik?.touched?.email && formik?.errors?.email && (
						<small className="text-red-600">{formik?.errors?.email}</small>
					)}
				</div>
				<div className="my-2 flex flex-col">
					<div className="flex justify-between items-">
						<label className="text-gray-400 text-sm block" htmlFor="">
							Password:
						</label>
						<span className="text-xs ml-8 text-indigo-400">
							Forgot Password?
						</span>
					</div>

					<input
						className={` ${
							formik?.touched?.password && formik?.errors?.password
								? "border-red-400 text-red-500"
								: "border-gray-400"
						}w-full border-2 border-gray-400 border-solid rounded-md p-2 placeholder:text-slate-400 text-sm`}
						type="password"
						name="password"
						id="password"
						value={formik?.values?.password}
						placeholder="******"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik?.touched?.password && formik?.errors?.password && (
						<small className="text-red-600">{formik?.errors?.password}</small>
					)}
				</div>
				<div className="flex justify-start items-start mb-4">
					<input
						type="checkbox"
						name="checked"
						id="check"
						checked={formik?.values?.checked}
						onChange={() => {
							formik?.setFieldValue("checked", !formik.values?.checked);
						}}
						className="p-5 default:ring-2 h-5 w-5"
					/>
					<label htmlFor="check" className="text-gray-400 text-sm mx-3">
						Remember me
					</label>
				</div>
				<button
					className=" text-white bg-indigo-500 px-15 py-2 rounded-md shadow hover:shadow-lg hover:shadow-violet-300/100 opacity-95 ease-in duration-200 block w-full"
					onClick={formik.handleSubmit}
				>
					Sign in
				</button>

				<div className="mt-3 text-center">
					<p className="text-gray-600 text-center mt-5 inline text-sm">
						New on our platform?
					</p>
					<p className="text-center  text-indigo-400 inline text-sm mx-1">
						Create an account
					</p>
				</div>

				{/* Separator section */}
				<div className="flex justify-center items-center space-x-4 mt-5">
					<hr className="border-1 border-gray-400 opacity-25 inline-block w-40" />
					<span className="text-gray-600 text-sm">or</span>
					<hr className="border-1 border-gray-400 opacity-25 inline-block w-40" />
				</div>

				{/* Footer section */}
				<div className="space-x-4 text-center mt-5">
					<a href="/">
						<FaFacebookSquare className="w-7 h-7 text-blue-900 inline" />
					</a>
					<a href="/">
						<FaTwitterSquare className="w-7 h-7 text-sky-500 inline" />
					</a>
					<a href="/">
						<FaMailBulk className="w-7 h-7 text-red-500 inline" />
					</a>
					<a href="/">
						<FaGithub className="w-7 h-7 text-black inline" />
					</a>
				</div>
			</section>
		</main>
	);
};

export default LandingPage;
