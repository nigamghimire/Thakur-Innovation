/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Booking from "./pages/Booking";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dreamy-gradient selection:bg-brand-purple/30 transition-colors duration-300">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/get-started" element={<Booking />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

