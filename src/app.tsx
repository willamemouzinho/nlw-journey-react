import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NewTripPage } from "./pages/new-trip";
import { TripDetailsPage } from "./pages/trip-details";
import { DayPickerRange, Range, RangeMinMax } from "./components/day-picker";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NewTripPage />,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailsPage />,
  },
  {
    path: "/test",
    element: (
      <div className="flex h-full gap-4">
        <div className="flex gap-2">
          <Range />

          <DayPickerRange />

          <RangeMinMax />
        </div>
      </div>
    ),
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}
