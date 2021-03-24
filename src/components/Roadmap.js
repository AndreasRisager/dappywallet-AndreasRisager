export default function Roadmap({ date, text, green, blue, white, more }) {
	return (
		<div className="roadmap__card">
			{more ? (
				<i className="fas fa-ellipsis-h roadmap__more" />
			) : (
				<div className="circleline">
					{green ? <div className="circle circle__green" /> : ""}
					{blue ? <div className="circle circle__blue" /> : ""}
					{white ? <div className="circle circle__white" /> : ""}
					<div className="line" />
				</div>
			)}

			<p className="roadmap__date">{date}</p>
			<p>{text}</p>
		</div>
	);
}
