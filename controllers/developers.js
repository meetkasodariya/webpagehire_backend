const Developer = require('../models/Developer');

exports.getAllDevelopers = async (req, res) => {
  try {
    const developers = await Developer.find();
    res.json(developers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createDeveloper = async (req, res) => {
  try {
    const developer = new Developer(req.body);
    await developer.save();
    res.status(201).json(developer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.hireDeveloper = async (req, res) => {
  try {
    const developer = await Developer.findByIdAndUpdate(
      req.params.id,
      { hired: true },
      { new: true }
    );
    res.json(developer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};