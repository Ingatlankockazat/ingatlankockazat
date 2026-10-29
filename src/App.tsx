import LandingPage from "@/pages/LandingPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SiteLayout } from "@/components/site/SiteLayout";
import { RevealObserver } from "@/components/site/RevealObserver";
import Home from "@/pages/Home";
import ServicesPage from "@/pages/ServicesPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import { ImpressumPage, PrivacyPage } from "@/pages/LegalPages";
import { LanguageProvider } from "@/lib/i18n/Language";
export default function App(){return <BrowserRouter basename={import.meta.env.BASE_URL}><LanguageProvider><RevealObserver/><Routes><Route element={<SiteLayout/>}><Route index element={<Home/>}/><Route path="szolgaltatasok" element={<ServicesPage/>}/><Route path="rolunk" element={<AboutPage/>}/><Route path="kapcsolat" element={<ContactPage/>}/><Route path="adatkezeles" element={<PrivacyPage/>}/><Route path="ingatlan-atvilagitas" element={<LandingPage/>}/><Route path="impresszum" element={<ImpressumPage/>}/><Route path="*" element={<Navigate to="/" replace/>}/></Route></Routes></LanguageProvider></BrowserRouter>}
