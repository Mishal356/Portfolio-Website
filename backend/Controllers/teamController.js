const Team = require('../models/Team');

// @desc    Get all team members
// @route   GET /api/teams
// @access  Public
exports.getTeamMembers = async (req, res) => {
  try {
    const teamMembers = await Team.find();
    res.json(teamMembers);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc    Get single team member by ID
// @route   GET /api/teams/:id
// @access  Public
exports.getTeamMemberById = async (req, res) => {
  try {
    const member = await Team.findById(req.params.id);
    if (member) {
      res.json(member);
    } else {
      res.status(404).json({ error: 'Team member not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc    Create new team member
// @route   POST /api/teams
// @access  Private (Admin)
exports.createTeamMember = async (req, res) => {
  try {
    const { name, role, bio, image } = req.body;

    const member = new Team({
      name,
      role,
      bio,
      image,
    });

    const createdMember = await member.save();
    res.status(201).json(createdMember);
  } catch (err) {
    res.status(400).json({ error: 'Invalid team member data' });
  }
};

// @desc    Update existing team member
// @route   PUT /api/teams/:id
// @access  Private (Admin)
exports.updateTeamMember = async (req, res) => {
  try {
    const { name, role, bio, image } = req.body;

    const member = await Team.findById(req.params.id);

    if (member) {
      member.name = name || member.name;
      member.role = role || member.role;
      member.bio = bio || member.bio;
      member.image = image || member.image;

      const updatedMember = await member.save();
      res.json(updatedMember);
    } else {
      res.status(404).json({ error: 'Team member not found' });
    }
  } catch (err) {
    res.status(400).json({ error: 'Invalid team member data' });
  }
};

// @desc    Delete team member
// @route   DELETE /api/teams/:id
// @access  Private (Admin)
exports.deleteTeamMember = async (req, res) => {
  try {
    const member = await Team.findById(req.params.id);

    if (member) {
      await member.remove();
      res.json({ message: 'Team member removed' });
    } else {
      res.status(404).json({ error: 'Team member not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};
