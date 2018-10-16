import "react-native";
import * as React from "react";
import { shallow } from "enzyme";
import * as renderer from "react-test-renderer";
import RoundedButtonRtl from "../IgniteComponents/RoundedButton/RoundedButton";

test("RoundedButton component renders correctly", () => {
  const tree = renderer.create(<RoundedButtonRtl onPress={() => {}} text="howdy" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("RoundedButton component with children renders correctly", () => {
  const tree = renderer.create(<RoundedButtonRtl onPress={() => {}}>Howdy</RoundedButtonRtl>).toJSON();
  expect(tree).toMatchSnapshot();
});

test("onPress", () => {
  let i = 0; // i guess i could have used sinon here too... less is more i guess
  const onPress = () => i++;
  const wrapperPress = shallow(<RoundedButtonRtl onPress={onPress} text="hi" />);

  expect(wrapperPress.prop("onPress")).toBe(onPress); // uses the right handler
  expect(i).toBe(0);
  wrapperPress.simulate("press");
  expect(i).toBe(1);
});
