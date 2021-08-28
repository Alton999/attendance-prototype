import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	componentContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		minHeight: "100vh"
	},
	customCard: {
		width: "90%",
		padding: "4em",
		height: "80vh"
	},
	marginContainer: {
		margin: "10px"
	},
	inlineContainer: {
		display: "inline-flex",
		jusitfyContent: "space-around"
	}
}));
