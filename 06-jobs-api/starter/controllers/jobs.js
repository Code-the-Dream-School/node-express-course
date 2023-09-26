const Job = require('../models/Job')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, NotFoundError } = require('../errors')

const getAllJobs = async (req, res) => {
  res.send('Get All Jobs')
}
const getJob = async (req, res) => {
  res.send('Get Single Job')
}

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId
  const job = await Job.create(req.body)
  res.status(StatusCodes.CREATED).json({job})
}

const updateJob = async (req, res) => {
  res.send('Update Job')
}

const deleteJob = async (req, res) => {
  res.send('Delete Job')
}

module.exports = {
  createJob,
  deleteJob,
  getAllJobs,
  updateJob,
  getJob,
}
