import { serve } from "./bootstrap/app";
import { connectDb } from "./bootstrap/database";

serve();
connectDb();
