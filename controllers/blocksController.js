const ApiError = require('../error/ApiError');
const { Blocks } = require('../models/models');

class BlocksController {
  async createBlock(req, res) {
    const { text, fontSize, color, bgColor } = req.body;
    const block = await Blocks.create({ text, fontSize, color, bgColor });
    return res.json(block);
  }

  async getAll(req, res) {
    const blocks = await Blocks.findAll();
    return res.json(blocks);
  }

  async updateBlock(req, res) {
    const { id } = req.params;
    const { text, fontSize, color, bgColor } = req.body;
    // const block = await Blocks.update({ text, fontSize, color, bgColor });
    const result = await Blocks.update(
      { text, fontSize, color, bgColor },
      {
        where: {
          id: id,
        },
      }
    );
    return res.json(result);
  }
  async deleteBlock(req, res) {
    const { id } = req.params;
    const result = await Blocks.destroy({
      where: {
        id: id,
      },
    });
    return res.json(result);
  }
}

module.exports = new BlocksController();
