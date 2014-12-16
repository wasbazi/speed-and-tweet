# Speed and Tweet

This handy npm module makes it easy to take a speed test and tweet it!

# Installation

```bash
npm install speed-and-tweet -g
```

# Environment Variables

Everything is controlled by environment variables, so once you have a twitter
app setup you will have to populate these environment variables with their
respective values to get to tweeting:

- `TWITTER_CONSUMER_KEY`
- `TWITTER_CONSUMER_SECRET`
- `TWITTER_ACCESS_TOKEN`
- `TWITTER_ACCESS_TOKEN_SECRET`

# Usage

Rip open your command line of choice and type in

```bash
# to show help:
# speed-and-tweet --help

# Runs the test every 5 minutes
speed-and-tweet

# Runs the test every 10 minutes
speed-and-tweet -i 10

# Runs the test every 5 minutes and tweets with total set to 100
speed-and-tweet -t 100
```
