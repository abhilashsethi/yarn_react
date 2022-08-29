import React, { useRef } from "react";
import { useState } from "react";

const UseRef = () => {
	const [name, setName] = useState("");
	const inputRef = useRef();
	const outPut = () => {};

	const focus = () => {
		console.log(inputRef.current);
		inputRef.current.value = "some value";
		inputRef.current.style.background = "teal";
	};

	return (
		<div>
			<input
				className="border-2 border-rose-600 border-solid placeholder:italic placeholder:text-slate-400"
				ref={inputRef}
				type="text"
				placeholder="name"
				value={name}
				onChange={(e) => {
					setName(e.target.value);
				}}
			/>
			<div>My name is {name} </div>
			<button onClick={outPut} className="bg-teal-400 rounded-2xl p-2">
				Focus
			</button>
		</div>
	);
};

export default UseRef;
