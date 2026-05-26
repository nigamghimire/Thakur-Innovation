/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import FullPortfolio from "./pages/FullPortfolio";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dreamy-gradient selection:bg-brand-purple/30 transition-colors duration-300">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/portfolio" element={<FullPortfolio />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

