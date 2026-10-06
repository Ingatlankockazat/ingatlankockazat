import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SiteLayout } from "@/components/site/SiteLayout";
import { RevealObserver } from "@/components/site/RevealObserver";
import Home from "@/pages/Home";
import ServicesPage from "@/pages/ServicesPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import { ImpressumPage, PrivacyPage } from "@/pages/LegalPages";
export default function App(){return <BrowserRouter basename={import.meta.env.BASE_URL}><RevealObserver/><Routes><Route element={<SiteLayout/>}><Route index element={<Home/>}/><Route path="szolgaltatasok" element={<ServicesPage/>}/><Route path="rolunk" element={<AboutPage/>}/><Route path="kapcsolat" element={<ContactPage/>}/><Route path="adatkezeles" element={<PrivacyPage/>}/><Route path="impresszum" element={<ImpressumPage/>}/><Route path="*" element={<Navigate to="/" replace/>}/></Route></Routes></BrowserRouter>}
