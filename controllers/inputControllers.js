import  Input  from "../models/inputModel.js";

export const uploadInputController = (req, res) => {
  debugger;
  let testInput = new Input({
    user: req.body.user,
    text: req.body.text,
  });

  testInput.save(function (err) {
    if(err){
      return err;
    }})
    res.send("Saved Successfully"));
};

export const test = (req, res) => {
  res.send("Hi, this is for the test");
};
