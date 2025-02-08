const Service = require('../models/Service');

// @desc    Get all services
// @route   GET /api/services
// @access  Public
exports.getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc    Get single service by ID
// @route   GET /api/services/:id
// @access  Public
exports.getServiceById = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);
    if (service) {
      res.json(service);
    } else {
      res.status(404).json({ error: 'Service not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};

// @desc    Create new service
// @route   POST /api/services
// @access  Private (Admin)
exports.createService = async (req, res) => {
  try {
    const { title, description, icon } = req.body;

    const service = new Service({
      title,
      description,
      icon,
    });

    const createdService = await service.save();
    res.status(201).json(createdService);
  } catch (err) {
    res.status(400).json({ error: 'Invalid service data' });
  }
};

// @desc    Update existing service
// @route   PUT /api/services/:id
// @access  Private (Admin)
exports.updateService = async (req, res) => {
  try {
    const { title, description, icon } = req.body;

    const service = await Service.findById(req.params.id);

    if (service) {
      service.title = title || service.title;
      service.description = description || service.description;
      service.icon = icon || service.icon;

      const updatedService = await service.save();
      res.json(updatedService);
    } else {
      res.status(404).json({ error: 'Service not found' });
    }
  } catch (err) {
    res.status(400).json({ error: 'Invalid service data' });
  }
};

// @desc    Delete service
// @route   DELETE /api/services/:id
// @access  Private (Admin)
exports.deleteService = async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (service) {
      await service.remove();
      res.json({ message: 'Service removed' });
    } else {
      res.status(404).json({ error: 'Service not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
};
