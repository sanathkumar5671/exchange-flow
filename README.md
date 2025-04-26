# Exchange Flow

A Next.js application for converting Australian Dollars (AUD) to major world currencies with historical exchange rate visualization.

## Features

- Convert AUD to USD, EUR, INR, CAD, and NZD
- Real-time currency conversion
- 14-day historical exchange rate charts
- Responsive design for mobile and desktop
- Server-side API key protection

## Tech Stack

- **Frontend**: Next.js with React
- **Styling**: Tailwind CSS
- **Charts**: Chart.js with react-chartjs-2
- **API**: OpenExchangeRates

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation and Development

1. Clone the repository:
   ```bash
   git clone https://github.com/sanathkumar5671/exchange-flow.git
   cd currency-converter
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

### Docker Deployment

Build and run the Docker container:

```bash
# Build the image
docker build -t currency-converter .

# Run the container
docker run -p 3000:3000 currency-converter
```

Alternatively, use Docker Compose:

```bash
docker-compose up
```

## API Routes

- **/api/rates**: Fetches the latest exchange rates for AUD to target currencies
- **/api/historical?currency=XXX**: Fetches the 14-day historical rates for a specific currency
