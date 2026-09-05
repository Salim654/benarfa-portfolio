import type {
  Category,
  ContactGenre,
  BudgetTier,
  Monograph,
  NavLink,
  Project,
  SocialLink,
} from "../types";

export const images = {
  logo: "https://lh3.googleusercontent.com/aida/AEtjO1Xfg_uHh2NPGJzj_kaGkpiLAPTiZQLHeHCaYDOXW6Weu_lawzDRPlOxcDFM-pkTbMcOszctZsOqPYyFepgnF4sPGz9ikkEe2EnmyLW425oOI0dRRgmOVxkVZQOrkcTszETScU9PubKV4072f6euK7J9IGLg9grTx_zCP2sksHZOHmZnhI6zLFpQPWQHiUW7lT_v-nEVJ6Nl0rZuA7O7Uge__dobVSUVfR6-XN60A8nriRQVIeeAlgf8zHWW",
  avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsefo9pMKDPk1bow7D4kae-dPmjIlpa-tl2b3wOElxEKobAXswU4NgGH7xxLe5JXgET1F0y2AyttFBdJuoQATW8M6bt-W7cXuCG_pvtnnUQUy5957js5uQaEpKDrUQ3MRK16suZ9A03GDK3w-KBf4chrM5x0R1J36NTIxT6xeWmD7Iqe4W7hDIIiYUtT5Aao_D1EBFGvlJ1geTXKTMBo6WDRMIPEcXF4a3cMrJ9sRDoaCIJzc-1wKYGQ",
  heroCamera:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAS4HafDhXcogsIe4Qz5V0TGAfbR7iO-NdXBMWz7HTy7hJxQRxgG3-FdQPdKbQsKBV6VCubiuxLdjo9_3h5fHO_vRuLI_DKR83xbJHQvrnYs3d5Bh8gfcmOCisXONvHZTmIoYUruXVSuu_1oEk0lVABLRiaZJVR2F8C0g178uMvjApXns_7w_gejIirhcI4Vmy0Goo00oR2oCwU-kI6fj9mNlDVhZvXXMYknyFxaB1EuEqTpcfK3zC13Q",
  fashionHome:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCOopxCd-9IE4jbYKq2uZeOyEfJrw-DbOfeV1D4pm1Sf831_AMsy-ZD6QvkvTzwdgdr6cNkx6l-ctXN13B5PHqEArDyIKPLl2ocgfqDJkCRKFFLOJK5DlqTAlV0-1ATqXjBAo5nOerFGdv4xFF8uBWRaDgyOokOFN_NZngOXN05pOCmXckCoxeqIgPIR0PWClL5kGZ4C5IpB-J10guS8xHm0T04mdPJ3mU0IUOrtWb-I-Drmq4wlmlPDA",
  jccHome:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCX6qaEt9knKc1pmot9cplMOve0gQJJi_MVqS2sR1JSSUA89ko6habSzzk0IiFesP__xtfey5LwO8lMhNdfjWJThPzbYaH4bylbA2Tfq9K0U4mvy8XNDx6Nt-962Ywtx5B4UG-U_M0Q5XJdDnsNt4_hrjdJL1zPPJOdHGsGGtE_nnkAsj6KGhLX-d7eVbj8jMrTAKnelCgG6R2aJt_GNVCFlySn3hLKXC8mKa515We78TiJ_vIvWgQDXQ",
  porscheHome:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCJnV76EHeZyCWznitaILVAixOqs2aoPqTcWyAaCK0fvXzGEGUqmfWZLwVluvCTRXxJYRme9_aPrce2zD8S0x-msR0mEPo6PsC2W9QEZMemrvqOKAV9ZHpmoc5gszAc66H74kpanUcYFcFUA0JnR3857SVqHhnZtM9v5YRM2pzm27wtI-kvUmcYrjeGeKV2IB-Z3GT4NKpEZSAbwGMkAm9ywuPVGkbZzExkR9SnlCrE_C9a4fBCJ8nldA",
  medinaStreet:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBK4nylPtoMVmvhtsnXmpooJKnCEgas2jNFbS7mncKfDjBwlmSbMmxOZWbxfBhMyrntDpz1WrNa3_F9Nppzrlc6qxL-8v1IDH5UqvaKlkJWSHyz2IIA1BVlHSzpRE4qop2V0p-gtdgVJ1SFJUPUk-3uM6nXUE08G-L1rU2fJqI91iFtEHfpKK9rr_7-RZ-zJpdTKQmA0cbYwkuJSmDzMFlAS3mftpu0SHsN5FKQLDVxiPEpu3q1TVPT5A",
  jccRedCarpet:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDo9rb4gTo6bS4XuTkq19srI55pu7_J0Djvy8T7fRtEAd9_WQAOj9Oyfkx7AcK7xQXqprjwSsvKSt7ErImiJ3w_CqDDh7JdYeFdK2u1O6x9W5fRdU4O1wOLC5UPxCUh12i_yTMeu6pl5_LIwx9RzMY3TIqppGVuZ4TgWIuZKWRp68fE1gD4JL-L5rsn0v2I1WQYF5bEiHdZYVZILmv6CuGz4HLwGuyct4diqxqyfSO3QNXyl_e3426qrA",
  maisonBlanche:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDQUo74lGWNxHgPAec7k3yjJCiNUkZQlfjvWckxprvILsmYRLRrOoGVq9BkvH0GDgLGEvG22GerykTlFOrPHl7oBR4s_prQ0lUhMTS6PkzSb0VEeW3Su4BxAoGPpeQ0UnbnnRSEZhPc0wwo3kl1M8OVfrYtBG5yL_DTY7GNEzlVhzecO1paYVkr_kMrCoiRLeZUG6Dwbmly_r7g2qJAhWOJY0zDMVTa0FyWqiLHWQ9gw5b_ymNDPI1FjA",
  silverstone911:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAW5XgR9UMpITOn3tDReTorQqkD5mB4zyCKxcZgP9IpKZ1g_yDbOrRDY8LgRzDuBpG6Hdet_hA33yNdAaAT93H-cMZ1ua7t1IRCSwgPY31PJwTh5Wvp1gY19xE8JS1nbQ3vJU-u7FWgTF1lH2CMYeqE1RZwlxzljJIG6hDAiB5PEYtX6vXIDL96ru-fSQbjiQVjJniVZKOA5YueNPRlyYhpoe6v0JNYvUSJ2DHg0jXuQ4eLpTvqsMaQlg",
  ephemeralVows:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBGSWPWn4kbh1Ppd96Rx-AyOG-xtTaY-liPPYN5TV6Rra2yykmhZVJrL_Evd23OChLWgt8lZGnx8wW-ih2qn-kmvK78sxsqKij18B2ISfxbHTINbn19huljGgzhks0oa13xtR9Jxs3y_eTkF3EmeOrV6SGaE8q7tb7X9gMpvSgaHMHphZBSPRAi_YQhNfPsuEoBP5xsOxsx-zQFQRG_cwosWnvpx-IoNTqgBCndyxi7mZw4pBhtvtKEMA",
  leicaDiptych:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAE_X_NyFrFIkzbxG1thEkwpMDda2gBz-gvPhqvS53V_4aMF9ObGPOxbiOY5vTrScRB5a9jQs0GdT8jY4g_80722m9N1tQKfAmppwyGhbiAYJWdAJ0H5grgZXr2JBtIUipb8asQF4jqtthdv1KtGdKpUyuTOrJot2I8d_NTS6znyK0qokt582T_4R5DdMSgzbo4pebeZFWv7vjv3R8oNaTtSpWTbKsw5FRtmMsXNLoSvcnZzG8yYOiWlg",
  atlasSolitude:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDeXZoq0LRq0N5wEd48WCnRIzKUN6HoUtda36IRGf-XRdFq_4olkls1pR_PvbJTcK5oHZ28AwQvvDV8j_2E6nsZW-x0CkpYTRVYVcY8TaCi2Yhl5oP2ZepYIjs1iLAZuCTUXy-sWtOWE46zmL6WnLeKIc3XJCHXZrNfmogey1y9qkaGiMoq31X3_AqvUyhtsZ3CJ_1xqDaI3cNgadBK2JX2DrMXHV-m2TnegTcMZDZhuOFCcZOcdfh1IQ",
  saharaElectronic:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDIXCFSHUWQQFRVf2uLe_J8K6ELaH5TY8TiPEj3O5g1D6p73YPFX26GTU6L_DRwG3C254gF_gKqVX3x9aWxTXFa26sBShcmzLEYJK2roKvUwMcf6mSCU2zKJiXxkpxIdkICeHdkYOnnwCBo8ZfxkYcVFsyHztLUSTLkZ23baIYDRh0InNvdse_WTPG7a4_TbPXYcjRhQ9FpSGAGVE-VNBJetM646G6mfe89z3CY8CBuaxteVQB4qTuHJg",
  maranello:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA5rM1ndEwwOHtn3T5foI_Wb9sIigw6AOE_AfgDrvgvWjsTzNOQt8rCmtQ9uZQRZv8I6NvX4_kYEDSy-PK9h0PDD5YA1fmZg9LC_3XjeT_NHuwdsPLV5y1ow_i0Dbe6uhi6SnVbVHM7PmUu0a_TqGXg4UkKLdjSv2RRFLZnIVyK9Oue01F7ja7ppDPI9oIreTbeLhZIwPHmmKjthlFIVragaFXV3jl541fnotMYZvj7My3Rax51l8vg5A",
  cinemaColisee:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCieglKVKxmK0rUGihGcIJ0En8XPBa-XjQMSmkRqPW394Uv_38tXA2dp_T-HzNezY_LWPcOBuw3sRogqavVZlpiDoXBXLjNaYdqkDDnbW7DsJ7ZJbUWwjiNO4hSNUKSzpWtxtqaw2GBE28_nxrBgi2l7kWrA3kpU0HzHukuTlwALqV_IyzqXM0Xr_Q89eV9SeZ84tjwYGnP1rHxz9n2YwT56GvOMJixyQAeur22VlkkxkSDukpBTgluLA",
  silkTerracotta:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCGfaRjqZVUnO2fi6dDdgtNJUt9i00DbMLXEfBYkElCPmqISWa01VHQ9QKakLvrPyGFzNvB7aCvGAg5goCt7fC0dX__3Ds6g5-ZJKjzw5sEMbljj5zwBkKc3AWtVJYZDkcvBueBkb2th7qsH2CnW6W4PTEfFUlL_22uWIsDLso8elixtTesaFP713TIMY10L_fdvXoMJdN70yv71lkzgLNDY9VAWY3mq92R2hY-xI9N-j2CmA9S3yPq6g",
  tuscanSolstice:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA50b_1gB_uFiN2-UQOjl_qom94FHDtIX6fFbU-6EstKlEaL7CmmAc-Hjg3b2nj71iO0M7HOPfuz6WBBtWSDmxS7-EmHzAmr-VfQRJNhzIWz0PYeh-14Bm14vUyWarljNSJIYYv41KGKqg8LzgBa6yQ1S2Q408EocsrQZy60Xsutn6WIUystC60w9BlGmV71CA_2jeTIv0ymPsRwkl9Br-ynDsC6nEYzkrX8QoKAKt_dkOa48LSfD7POg",
  lensOptics:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDF5YXYEtUq6TyCGr-7RYdmsrmheKjK99WbTVntRoIz3b4G7eDzEMcJhZrnJrkKgdJushsriWvdznnexOueESPrBbKLbN6F_A_GoCCBXE5rgTOOfZy7IXitxFw8Cnz3qoufMTcGfc7HP_tYEFtdutneDCHI0WYlN_zQfoDAyPDtkTAEyMyGRJ0YZL9jZT6HZxTkx4HWL6rapWepcb_PK-doism140uI_X1MFtrTGG8zQz7UXuyLfTsthA",
  studioDesk:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDgqGcGYqs1gXgNf3rITYBzKOqbq8czvt49EUXKWwC0hw6zT_fZfvnIqzXRBk5hNLmpa4vIB6ZiMzdGufrIs-JKHNNGaF2TdPTaG3HwlT6ugbF8cLHdfavbSbC_WwZDQeBQvyBau51S4s8FRBLWk6l4rGDJFVOpM4YphmQ5v9ikLdK4cC4pKHxskXBZ9GLp36PxT5QwAp4saEcLHPEUY360_eBP0JwgA9oCEQGxZr8yKY0HyITOBf1S2g",
  detailHero:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA0--i1iC40yqu_dhCzocBExaHPoFLK4rn427BUSieSBaXAGdNJuJlXoCAjREqV15Qc2dRHMasjhAPDqmxdhIxAyP7XXnhggtmlR47fd04Ur5m_5ZXgYnV6-poziDHEhZlSpeTiOg7Cyw9nuf75C8YuVbqX1ANzaGjJInuIKGomlOIAF9NJ7G1kap4_5Q0wq6i-SmL2vhgQCs2ypAAMZWzbaum2uJ1rNRUpw2zZSRp9KzfiUlBBY_U4Bw",
  detailCarder:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAQK6dYmVQRYpgROZifLrhWme7TU1LJ98Ac8Uw0pDG9dWt8JwMu635zeKSprnmkqyUNFKCZwAJnJY6d_GvWz4EbSaXVOLKQU7p8Ye45VuduSGipvq7CEPuXVHMPj6SznrXk_Ws5ypEIX_Nagd_vXrqo55X4u7N6tTX4gaTUK74Sveq3aRWu9IAJfJP5_O2fep49TsmA6b_8v-Hr1ni4nvhUQTYLy4Iqp7PNWIuow-T0nbd7GQRvDUOHdA",
  detailDoorway:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDZfVkX5V7p-6uBAi5UO6S31X-y_wxBXtStT68DH8_oXCfBt_F78o2KxItKjGA9ZSohY6dL4y7JEXSON4VdUIuiAiCDzidno0KUN9-KjUHZbwaMjMiW-s0cAY7zxUZWnfaYBv53u5zjBJ5HtvBrDydxtzbFswOv8MeZ-tJx3-ep_sVJMOAWV1wcpxEE-tpMnOHbrfjlwNXU8HkKQKvN63xNQUqsLhxkUkyGoRE9SXiVD2OlxMZv5ogxXg",
  detailGuardian:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDmnJ64eDnnAg5WZ97DjQZBb3wP24nR5SZM2c8vUb3EeY52jQTR0ykqq6kZthYdgIBTG1qk9sFCssryDI_qhUvnmLhLvqtIF97f0VIf52v2CH0bvTcKsyyo08BdNmFUZ5QmukbbxHZkBZ6Qnv9zKtMfsmiqeS7fKfhnHjRvRfMxV-vxoCNRpEShq8IGvVUOgvdLj3vQTpIsnym1RDn6Pb2oFXJqaGqwc-YPdpPzYC3Trd58vrL23Ydn_w",
  detailRainwater:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBjiseCc_xBuIX6u3rmMIlBQLuI109jW4yDDE79XUXi056UCalD1iHBHbya9eDoVrvpISNJ4fPGAFIaXqu96YkiTE9WsRtP2C4qWwYEgC4zhabYinrdoWyqTBnR3tptZQPgSYryKrdWGYswFR4ehT_DaFlj6RfjL8JUTyvbJ4sxhyjB-OzF5nA-wkdiRkS0iisP_LPVTMJakQ_bpBXEG3FsHZlru2XwlLbTO76yb2BKU12Nls7AI6LU_Q",
  detailLattice:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAk6AjLN_E1lqBNUoN2mvOAnjWZoNnuQyEEMDwuBVi-Dbg_N_lF_KRHjpSMeGrx1JrKxYywQbDItViIxdHmFmNfdXyxu5Ndyb9p_a34wUZpslJnxSETHtf1HRQ94yUxX6q-Q30FKYBKSIPGDw710VeHN47osBbUVM8Ppg_-Rce93Esej6KhtM_yeFs9fNThXntKD35P_bRSA-04-qVVnigLS2gUe51X47U6gwfT5XLwSVcMxKaVFoZyAw",
  detailPanoramic:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCjsVLUL65htjt6PKjWreur6hTt2Yb3844VSdRULTCggpH3EBCXQSgJCSSYnBgEvQAgzy21rGzbzTe2d-3V47TE7KHrSxS8aeN0qtKHAn_tYLfJH2WQ0e0gzFVRMfX_99VAUQh8LTJYfW13YBiETVG7SoP4frVmIOH_ZcJF8YPxY-WBFQKktvPTJl0UtuMI8xK-cWAZZpMY3G35PGiGT54hP_6K53-IzV6gmROjAHal299igK8Kq24WQA",
} as const;

export const siteConfig = {
  name: "Benarfa Production",
  tagline: "Light, Shadow & Emotion",
  subtitle: "Visual Storyteller",
  email: "studio@benarfa.production",
  contactEmail: "contact@benarfaproduction.com",
  phone: "+33 1 42 68 55 00",
  agent: "+33 (0)1 42 68 55 00",
  locations: "Tunis — Worldwide",
  footerRights: "2026 Benarfa Production. All visual works protected under archival copyright.",
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", path: "/" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const footerLinks: { label: string; path: string }[] = [
  //{ label: "Colophon", path: "/about" },
  //{ label: "Terms", path: "/contact" },
  //{ label: "Privacy", path: "/contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/aziz_ben_arfa/?hl=ar" },
];

export const categories: Category[] = [
  "Street Photography",
  "Event",
  "JCC",
  "Fashion",
  "Wedding",
  "Festival",
  "Automotive",
];

export const heroData = {
  serialStamp: "Archival Reel No. 2024 — 35MM / MEDIUM FORMAT",
  name: "Benarfa Production",
  subtitle: "Light, Shadow & Emotion",
  role: "Visual Storyteller",
  schemaTop: "CALIPER: 50MM F/1.2 NOCTILUX",
  schemaBottom: "APERTURE [F/1.2 - F/16]",
  element: "ELEMENT 01: ASPHERICAL OPTIC",
  latency: "LATENCY: 1/8000s . LEAF SHUTTER",
  interactiveLabel: "3D Camera Core Interactive . Hover Tilt & Depth",
  iso: "ISO 100",
  stock: "KODAK TRI-X 400 EMULATION",
  scrollPrompt: "Explore Works",
  cameraAlt:
    "Technical architectural breakdown of a vintage medium format camera with exploded lens elements",
} as const;

export const monographs: Monograph[] = [
  {
    id: "geometry-of-silk",
    title: "The Geometry of Silk",
    categoryLabel: "Fashion / Haute Couture",
    year: 2024,
    optics: "Hasselblad H6D-100c",
    location: "Paris . 2024",
    description:
      "Commissioned monograph studying the kinetic movement of raw fabrics against brutalist limestone monoliths.",
    image: images.fashionHome,
    alt: "Avant-garde high fashion monochrome editorial portrait with flowing silk fabric",
    cols: 5,
  },
  {
    id: "jcc-shadows-celluloid",
    title: "JCC: Shadows on Celluloid",
    categoryLabel: "Cinema / Documentary",
    year: 2024,
    optics: "Leica M11 . 35mm Summilux",
    location: "Tunis . 2024",
    description:
      "Unrehearsed human vignettes and director soliloquies behind the curtain of Mediterranean cinema.",
    image: images.jccHome,
    alt: "Behind the scenes photography at the Carthage Film Festival",
    cols: 4,
  },
  {
    id: "alpine-aerodynamics",
    title: "Alpine Aerodynamics",
    categoryLabel: "Automotive / Analog Reel",
    year: 2024,
    optics: "Mamiya 7II . 80mm",
    location: "Provence . 2024",
    description:
      "The poetic velocity of mechanical engineering rendered in high-grain Portra 400 emulsions.",
    image: images.porscheHome,
    alt: "Vintage air-cooled Porsche 911 on an alpine road",
    cols: 3,
  },
];

export const projects: Project[] = [
  {
    id: "medina-nocturne",
    index: "01",
    title: "Medina Nocturne",
    categories: ["Street Photography"],
    coverImage: images.medinaStreet,
    coverAlt: "Monochrome 35mm street portrait in a Medina alleyway",
    description:
      "A 35mm monochrome exploration of ancient limestone alleyways, wool-dye artisans, and solitary lamplit silhouettes after midnight in North Africa.",
    meta: { location: "Tunis, 2024", year: 2024, optics: "35mm", aspect: "4/5" },
    aspect: "aspect-[4/5]",
    span: "lg:col-span-5",
    gallery: [
      {
        src: images.detailHero,
        alt: "Ancient vaulted stone passageway in the Tunis Medina at night",
        caption: "Plate 01 . Passage des Andalous",
        meta: "Tunis 02:41 AM",
      },
      {
        src: images.detailCarder,
        alt: "Elderly felt artisan shaping a traditional chéchia cap",
        caption: "Plate 02 . The Carder's Palms",
        meta: "Leica 35mm f/2.0 . Souk des Chechias",
      },
      {
        src: images.detailDoorway,
        alt: "Moorish doorway in a narrow Tunis street",
        caption: "Plate 03 . The Threshold of Rue du Pacha",
        meta: "1/30s Handheld . f/1.4",
      },
      {
        src: images.detailGuardian,
        alt: "Night watchman drinking mint tea at the Zitouna Mosque",
        caption: "Plate 04 . The Guardian's Tea",
      },
      {
        src: images.detailRainwater,
        alt: "Rainwater pooled on Roman spoil capitals",
        caption: "Plate 05 . Rainwater & Marble",
      },
      {
        src: images.detailLattice,
        alt: "Moucharabieh lattice screens across a narrow alley",
        caption: "Plate 06 . Sabbath of Lattice",
      },
      {
        src: images.detailPanoramic,
        alt: "Rooftops and minarets of the Tunis Medina under moonlight",
        caption: "Plate 07 . Horizon Index",
        meta: "15.0s . f/8 . MONOCHROM SENSOR",
      },
    ],
    specs: [
      { label: "Camera Body", value: "Leica M Monochrom (Typ 246)" },
      { label: "Primary Prime", value: "35mm Summilux-M f/1.4 ASPH" },
      { label: "Film Chemistry", value: "Ilford HP5+ @ EI 1600 in Kodak D-76" },
      { label: "Print Stock", value: "Hahnemuhle Photo Rag Baryta 315gsm" },
      { label: "Dynamic Range", value: "+3.5 EV / -4.0 EV" },
    ],
  },
  {
    id: "jcc-red-carpet",
    index: "02",
    title: "JCC Red Carpet & Grain",
    categories: ["JCC", "Festival"],
    coverImage: images.jccRedCarpet,
    coverAlt: "Editorial candid from the Carthage Film Festival red carpet",
    description:
      "Cinema verité coverage of the Carthage Film Festival red carpet, shot on Kodak Tri-X for the laureate monograph.",
    meta: { location: "Carthage, 2024", year: 2024, optics: "Kodak Tri-X", aspect: "16/10" },
    aspect: "aspect-[16/10]",
    span: "lg:col-span-7",
    gallery: [
      {
        src: images.jccRedCarpet,
        alt: "Editorial candid from the JCC red carpet",
        caption: "Red Carpet Arrival",
      },
    ],
  },
  {
    id: "maison-blanche-couture",
    index: "03",
    title: "Maison Blanche Couture",
    categories: ["Fashion"],
    coverImage: images.maisonBlanche,
    coverAlt: "High-fashion studio editorial with sculpted linen garment",
    description:
      "Studio monograph for Maison Blanche focusing on sculptural linen tailoring and shadow play.",
    meta: { location: "Paris, 2024", year: 2024, optics: "Hasselblad", aspect: "square" },
    aspect: "aspect-square",
    span: "lg:col-span-4",
    gallery: [
      {
        src: images.maisonBlanche,
        alt: "High-fashion studio editorial with sculpted linen garment",
        caption: "Sculpted Linen Study",
      },
    ],
  },
  {
    id: "silverstone-classic-911",
    index: "04",
    title: "Silverstone Classic 911",
    categories: ["Automotive"],
    coverImage: images.silverstone911,
    coverAlt: "Emerald green vintage Porsche 911 Carrera RS at Silverstone",
    description:
      "An analog tribute to the air-cooled era — archival coverage of classic Porsche racing at Silverstone.",
    meta: { location: "Silverstone, 2023", year: 2023, optics: "50mm f/1.2", aspect: "16/9" },
    aspect: "aspect-[16/9]",
    span: "lg:col-span-8",
    offset: "-mt-12",
    gallery: [
      {
        src: images.silverstone911,
        alt: "Emerald green vintage Porsche 911 Carrera RS",
        caption: "Carrera RS . Paddock",
      },
    ],
  },
  {
    id: "ephemeral-vows-hammamet",
    index: "05",
    title: "Ephemeral Vows in Hammamet",
    categories: ["Wedding", "Event"],
    coverImage: images.ephemeralVows,
    coverAlt: "Editorial candid wedding photograph with sheer silk veil",
    description:
      "Documentary wedding coverage in the seaside gardens of Hammamet, shot on Portra 400.",
    meta: { location: "Hammamet, 2024", year: 2024, optics: "Portra 400", aspect: "4/5" },
    aspect: "aspect-[4/5]",
    span: "lg:col-span-6",
    gallery: [
      {
        src: images.ephemeralVows,
        alt: "Editorial candid wedding photograph with sheer silk veil",
        caption: "The Veil",
      },
    ],
  },
  {
    id: "leica-m11-diptych",
    index: "06",
    title: "Leica M11 Diptych",
    categories: ["Street Photography"],
    coverImage: images.leicaDiptych,
    coverAlt: "Fine-art street photograph from the Milan Brera district",
    description:
      "A two-frame meditation on the Milanese Brera district captured with a 35mm Summilux.",
    meta: { location: "Milan, 2024", year: 2024, optics: "35mm Summilux", aspect: "4/3" },
    aspect: "aspect-[4/3]",
    span: "lg:col-span-6",
    gallery: [
      {
        src: images.leicaDiptych,
        alt: "Fine-art street photograph from the Milan Brera district",
        caption: "Brera Study",
      },
    ],
  },
  {
    id: "atlas-solitude",
    index: "07",
    title: "Atlas Solitude",
    categories: ["Street Photography", "Festival"],
    coverImage: images.atlasSolitude,
    coverAlt: "Panoramic high Atlas mountain range in solitude",
    description:
      "A wide-format meditation on the High Atlas highlands captured with a Mamiya 7 II.",
    meta: { location: "Atlas Highlands, 2023", year: 2023, optics: "Mamiya 7 II", aspect: "21/9" },
    aspect: "aspect-[21/9]",
    span: "lg:col-span-12",
    gallery: [
      {
        src: images.atlasSolitude,
        alt: "Panoramic high Atlas mountain range",
        caption: "Panoramic . Atlas Highlands",
      },
    ],
  },
  {
    id: "sahara-electronic-gathering",
    index: "08",
    title: "Sahara Electronic Gathering",
    categories: ["Festival", "Event"],
    coverImage: images.saharaElectronic,
    coverAlt: "Desert music festival in Tozeur",
    description:
      "Electronic music gathering in the Tunisian Sahara, shot on Cinema Prime lenses.",
    meta: { location: "Tozeur, 2024", year: 2024, optics: "Cinema Prime 35mm", aspect: "16/10" },
    aspect: "aspect-[16/10]",
    span: "lg:col-span-7",
    gallery: [
      {
        src: images.saharaElectronic,
        alt: "Desert music festival in Tozeur",
        caption: "Tozeur Dunes",
      },
    ],
  },
  {
    id: "scuderia-maranello-paddock",
    index: "09",
    title: "Scuderia Maranello Paddock",
    categories: ["Automotive", "Event"],
    coverImage: images.maranello,
    coverAlt: "Paddock garage with a vintage Ferrari 250 GT SWB",
    description:
      "Behind-the-tape access to the Maranello paddock at Monza, shot on 85mm f/1.4.",
    meta: { location: "Monza, 2023", year: 2023, optics: "85mm f/1.4", aspect: "4/5" },
    aspect: "aspect-[4/5]",
    span: "lg:col-span-5",
    gallery: [
      {
        src: images.maranello,
        alt: "Paddock garage with a vintage Ferrari 250 GT SWB",
        caption: "Maranello Paddock",
      },
    ],
  },
  {
    id: "cinema-colisee-retrospective",
    index: "10",
    title: "Cinema Colisee Retrospective",
    categories: ["JCC", "Event"],
    coverImage: images.cinemaColisee,
    coverAlt: "Art-deco movie theater auditorium",
    description:
      "A square-format homage to the art-deco Colisee theater on Avenue Bourguiba.",
    meta: { location: "Avenue Bourguiba, 2023", year: 2023, optics: "Square Format", aspect: "square" },
    aspect: "aspect-square",
    span: "lg:col-span-4",
    gallery: [
      {
        src: images.cinemaColisee,
        alt: "Art-deco movie theater auditorium",
        caption: "Colisee Auditorium",
      },
    ],
  },
  {
    id: "silk-terracotta",
    index: "11",
    title: "Silk & Terracotta",
    categories: ["Fashion"],
    coverImage: images.silkTerracotta,
    coverAlt: "Editorial fashion photograph with burnt terracotta silk drape",
    description:
      "Editorial fashion series in Nabeul, pairing raw silk against terracotta architecture on 6x7 film.",
    meta: { location: "Nabeul, 2024", year: 2024, optics: "6x7 Film", aspect: "4/5" },
    aspect: "aspect-[4/5]",
    span: "lg:col-span-4",
    gallery: [
      {
        src: images.silkTerracotta,
        alt: "Editorial fashion photograph with burnt terracotta silk drape",
        caption: "Terracotta Drape",
      },
    ],
  },
  {
    id: "tuscan-solstice",
    index: "12",
    title: "Tuscan Solstice",
    categories: ["Wedding"],
    coverImage: images.tuscanSolstice,
    coverAlt: "Romantic intimate wedding in a Tuscan olive grove",
    description:
      "An intimate summer solstice wedding captured in a Tuscan olive grove on 35mm.",
    meta: { location: "Siena, 2023", year: 2023, optics: "35mm", aspect: "4/5" },
    aspect: "aspect-[4/5]",
    span: "lg:col-span-4",
    gallery: [
      {
        src: images.tuscanSolstice,
        alt: "Romantic intimate wedding in a Tuscan olive grove",
        caption: "Oliveto Invitation",
      },
    ],
  },
];

export const portfolioHeader = {

  title: "The Archive",
  description:
    "Curated visual series spanning documentary, editorial fashion, cinematic festivals, and raw urban moments across 12 countries.",
  //metrics: [
    //{ value: "1,480", label: "Archived Plates" },
    //{ value: "35mm . 6x7", label: "Primary Formats" },
    //{ value: "12", label: "Global Locales" },
   // { value: "2018—2025", label: "Active Monograph" },
 // ],
} as const;

export const artistQuote = {
  quote:
    "Photography is not the recording of reality, but the deliberate capture of light that reveals the unsaid.",
  name: "Amine Benarfa",
  role: "Director . Principal Auteur",
} as const;

export const clients = [
  { name: "VOGUE", note: "Arabia . Editorial" },
  { name: "Cartier", note: "Maison Campaign" },
  { name: "JCC TUNIS", note: "Official Laureate" },

] as const;

export const ctaData = {
  label: "Global Representation & Private Commissions",
  title: "Ready to shape your next visual monograph?",
  body: "Available worldwide for artistic commissions, cinema cinematography, and high-fashion visual narratives.",
  primaryCta: "Commission Project",
  secondaryCta: "Browse Archives",
} as const;

export const aboutData = {
  portrait: {
    image: images.avatar,
    alt: "Editorial black and white portrait of an independent photographer in his early studio",
    name: "Aziz Benarfa",
    role: "Founder & Visual Director — Tunis",
    locations: [ "Tunis Atelier (La Marsa Corniche)"],
  },
  bio: {
    label: "About The Artist",
    title: "Observing life in its unscripted grace.",
    paragraphs: [
      "Aziz Benarfa began his visual journey in the labyrinthine souk of the Tunis Medina, where he apprenticed in an analog darkroom and learned that light, like reputation, is earned slowly. What followed was a decade of quiet notebooks, borrowed rangefinders, and a cross-continental practice that now spans editorial, cinema, and private commission.",
      "Operating in Tunis, Benarfa Production treats every assignment as a monograph — a cohesive visual argument rather than a scatter of images. His clients range from international fashion houses to UNESCO-designated cultural landmarks, yet his process remains deliberately unhurried: medium-format pacing, hand-printed files, and a strict devotion to analog-negative discipline.",
    ],
    quote:
      "A photograph must possess tension between what is seen and what is felt.",
    quoteMeta: "Aziz Benarfa . Journal Entry 2021 . 35mm Archival Gelatin",
  },

  exhibitions: [
    { year: "2024", title: "Nocturnes", detail: "Solo Exhibition, Galerie Vivienne, Paris" },
    { year: "2023", title: "Official Lead Photographer", detail: "Carthage Film Festival (JCC), Tunis" },
    { year: "2023", title: "International Street Photography Prize", detail: "European Photographic Forum, Berlin" },
    { year: "2022", title: "Raw & Tailored", detail: "Milan Fashion Week Monograph, Milan" },
  ],
  exhibitionsLabel: "Selected Exhibitions & Honors",
  pressClientsLabel: "Press & Selected Clients",
  pressClients: [
    "Vogue Italia",
    "JCC Festival",
    "L'Officiel",
    "RM Sotheby's",
    "Breguet",
    "Aman Resorts",
    "Kamel Lazaar",
    "Blind Magazine",
  ],
  cta: {
    title: "Let's create something timeless together.",
    primary: "Initiate Commission",
    secondary: "Explore Selected Folio",
    email: "STUDIO@BENARFA.PRODUCTION",
    agent: "Agent: +33 (0)1 42 68 55 00",
    dispatch: "CURRENT DISPATCH: tunisie STUDIO",
  },
} as const;

export const contactData = {
  hero: {
    title: "Initiate an Inquiry",
    body: "Available for commissions, editorial assignments, festival coverage, private weddings, and automotive monographs worldwide.",
    status: "Live",
  },
  studio: {
    label: "Atelier & Presence",
    title: " Tunis",
    description:
      "Our Marsa bureau handles editorial and commercial; the Tunis atelier manages festival, fine-art, and private commissions.",
    email: "contact@benarfaproduction.com",
    phone: "+33 1 42 68 55 00",
    turnaround: "Replies within 24-48 hours.",
    studioImage: images.studioDesk,
    socials: [
      { label: "@aziz_ben_arfa", href: "https://www.instagram.com/aziz_ben_arfa/?hl=ar" },
    ],
  },
  form: {
    stepLabel: "Step 01",
    title: "Commission Architecture",
  },
  workflow: [
    {
      step: "Step 01",
      title: "Pre-Prod",
      detail: "Consultation",
      meta: "Duration: 1-2 Weeks",
    },
    {
      step: "Step 02",
      title: "Capture",
      detail: "Production & Capture",
      meta: "On-Location",
    },
    {
      step: "Step 03",
      title: "Post-Prod",
      detail: "Master Grading & Archival Delivery",
      meta: "Turnaround: 3-4 Weeks",
    },
  ],
} as const;

export const contactGenres: ContactGenre[] = [
  { value: "editorial-fashion", label: "Editorial/Fashion" },
  { value: "commercial-brand", label: "Commercial/Brand" },
  { value: "jcc-festival", label: "JCC/Festival/Event" },
  { value: "private-wedding", label: "Private Wedding" },
  { value: "automotive", label: "Automotive" },
  { value: "fine-art", label: "Fine Art Commission" },
];

//export const budgetTiers: BudgetTier[] = [
 // { value: "4k-8k", label: "EUR 4k-8k (Editorial/Short)" },
  //{ value: "8k-15k", label: "EUR 8k-15k (Multi-Day/Wedding)" },
  //{ value: "15k-30k", label: "EUR 15k-30k (Commercial/Monograph)" },
  //{ value: "30k+", label: "EUR 30k+ (Global Cinema/Tier A)" },
//];

export const detailData = {
  backLabel: "Back to Archive",
  tag: "Street Photography . Documentary",
  volume: "Volume IX . Flagship Study",
  specDetail: "Independent Fine Art Series (12 editions)",
  heroCaption: "The Echo of Bab Mnara",
  heroMeta: "1/45s . f/1.4 . ISO 1600 . Uncropped Full Frame",
  heroPlatePrefix: "Plate 01",
  panoramicAspect: "Panoramic 2.39:1",
  diptychTitle: "Tactility & Geometry",
  triptychTitle: "The Midnight Cadence",
  triptychMeta: "Ilford HP5+ pushed 2 stops . D-76 Stock",
  pullQuote:
    "At night, the stone absorbs sound and reflects only truth.",
  pullQuoteMeta:
    "H. Benarfa . Field Notebook . Tunis Medina . October 14, 2024 . 03:42 AM",
  watermark: "NOCTURNE",
  essay: {
    label: "Technical & Curatorial Statement",
    title: "The Ethics of the Unseen: Nightfall as Sanctuary",
    paragraphs: [
      "This series was produced under the specific constraints of the UNESCO-protected Tunis Medina after midnight — no artificial lights, no staged subjects, and no second takes. Each exposure was negotiated with the architecture itself, letting the residual sodium lamps and moonlit limestone render the zone between documentation and dream.",
      "The frames are presented uncropped and untreated, faithful to the negative as it emerged from the tank. What remains is a record not merely of a place, but of the ethical quiet required to photograph it without theft.",
    ],
    director: "Hichem Benarfa (Director)",
    curator: "Leila Souissi (Exhibition Curator . Dar Ben Achour)",
  },
} as const;

export const portfolioFooter = {
  counterLabel: "Showing",
  of: "of",
  projectLabel: "Series",
  archive: {
    title: "The Optical Instrumentarium",
    body: "Every exposure in this archive is shaped by deliberate glass geometry — from the aspherical precision of modern rangefinders to the tactile falloff of classic medium-format primes.",
    darkroomLabel: "Darkroom Spotlight",
    calibrationRig: "BENARFA CALIBRATION RIG . 2025",
  },
  equipment: [
    { label: "Primary", value: "Leica M11 & Mamiya 7 II" },
    { label: "Prime", value: "Noctilux-M 50mm f/0.95 ASPH" },
    { label: "Emulsion", value: "Kodak Tri-X 400 / Portra 800" },
  ],
  load: {
    showing: "Showing 12 of 48 Series",
    note: "The complete digital negative vault houses unpublished assignments, commissioned works, and exhibition-only material.",
    secondary: "Inquire Print Catalog",
    done: "All 48 Monographs Loaded",
  },
} as const;

export const uiCopy = {
  home: {
    monographsLabel: "Volume 03 / Selected Series",
    monographsTitle: "Selected Monographs",
    monographsDescription:
      "A curated cadence of photographic series traversing high-fashion silhouettes, cinematic backstage narratives, and tactile analog street documentaries.",
    viewArchive: "View Complete Archive",
    clientsLabel: "Selected Editorial Clients & Museum Exhibitions",
  },
  detail: {
    rawNegative: "Raw Negative Archival",
    frameDefault: "Frame #01",
    silentTerraces: "The Silent Terraces",
    overlookingMedina: "Overlooking the Medina core",
    curatorialEssayLabel: "Curatorial Essay",
    previous: "Previous",
    next: "Next",
    notFoundTitle: "Project not found",
    notFoundBody:
      "The monograph you're looking for doesn't exist in the archive.",
  },
  contact: {
    processLabel: "Our Process",
    submit: "Send Inquiry Brief",
    submitting: "Transmitting…",
    successTitle: "Inquiry Transmitted",
    successBody:
      "Thank you for your brief. Our studio will respond within 24–48 hours.",
    sendAnother: "Send Another Inquiry",
  },
} as const;
