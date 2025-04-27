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

1. Create a `.env` file in the root directory:

   ```env
   OPENEXCHANGERATES_API_KEY=your_api_key_here
   ```

2. Using Docker Compose (Recommended):

   ```bash
   # Build and start in production mode
   docker-compose up --build

   # Run in detached mode
   docker-compose up -d

   # Development mode with hot reloading
   docker-compose -f docker-compose.dev.yml up

   # Stop containers
   docker-compose down
   ```

3. Using Docker directly:

   ```bash
   # Build the image
   docker build -t exchange-flow .

   # Run the container
   docker run -p 3000:3000 -e OPENEXCHANGERATES_API_KEY=71a953462be945ca92da5c8932cb3d66 exchange-flow
   ```

4. Using npm scripts:

   ```bash
   # Start development environment
   npm run docker:dev

   # Start production environment
   npm run docker:prod

   # Stop containers
   npm run docker:stop
   ```

The application will be available at [http://localhost:3000](http://localhost:3000).

## API Routes

- **/api/rates**: Fetches the latest exchange rates for AUD to target currencies
- **/api/historical?currency=XXX**: Fetches the 14-day historical rates for a specific currency
