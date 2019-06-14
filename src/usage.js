var config = require("../config.json");

module.exports = {
  tweet: `Get the latest tweet from the given user and post it.\nUsage: \`${
    config.prefix
  }tweet <twitter screen name>\``,
  start: `Post a twitter user's tweets in real time.\nUsage: \`${
    config.prefix
  }start <twitter screen name> [--notext]\`\nI might take a few minutes to start posting their tweets.\nYou can add multiple twitter users by separating their screen names with spaces.`,
  stop: `Stop automatically posting tweets from the given user.\nUsage: \`${
    config.prefix
  }stop <twitter screen name>\``,
  stopchannel: `Exactly like stop but acts on the whole channel.\nUsage: \`${
    config.prefix
  }stopchannel [channel ID]\``,
  list:
    "Print a list of the twitter users you're currently fetching tweets from."
};