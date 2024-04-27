const svgs = {
  'like-full': `<svg  xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" ><path d="m480-173.846-30.308-27.385q-97.923-89.461-162-153.153-64.077-63.693-101.154-112.347-37.077-48.654-51.807-88.038Q120-594.154 120-634q0-76.308 51.846-128.154Q223.692-814 300-814q52.769 0 99 27t81 78.538Q514.769-760 561-787t99-27q76.308 0 128.154 51.846Q840-710.308 840-634q0 39.846-14.731 79.231-14.73 39.384-51.807 88.038-37.077 48.654-100.769 112.347Q609-290.692 510.308-201.231L480-173.846Z"/></svg>`,

  like: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m480-173.846-30.308-27.385q-97.923-89.461-162-153.153-64.077-63.693-101.154-112.347-37.077-48.654-51.807-88.038Q120-594.154 120-634q0-76.308 51.846-128.154Q223.692-814 300-814q52.769 0 99 27t81 78.538Q514.769-760 561-787t99-27q76.308 0 128.154 51.846Q840-710.308 840-634q0 39.846-14.731 79.231-14.73 39.384-51.807 88.038-37.077 48.654-100.769 112.347Q609-290.692 510.308-201.231L480-173.846ZM480-228q96-86.769 158-148.654 62-61.884 98-107.384t50-80.616q14-35.115 14-69.346 0-60-40-100t-100-40q-47.769 0-88.154 27.269-40.384 27.269-72.307 82.116h-39.078q-32.692-55.616-72.692-82.5Q347.769-774 300-774q-59.231 0-99.615 40Q160-694 160-634q0 34.231 14 69.346 14 35.116 50 80.616t98 107q62 61.5 158 149.038Zm0-273Z"/></svg>`,

  star: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m354-247 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143Zm-61 83.924 49.615-212.539-164.923-142.847 217.231-18.846L480-737.693l85.077 200.385 217.231 18.846-164.923 142.847L667-163.076 480-275.923 293-163.076ZM480-430Z"/></svg>`,

  'star-full': `<svg class="star-full" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m293-163.076 49.615-212.539-164.923-142.847 217.231-18.846L480-737.693l85.077 200.385 217.231 18.846-164.923 142.847L667-163.076 480-275.923 293-163.076Z"/></svg>`,

  loc: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480.136-490.769q26.71 0 45.595-19.021 18.884-19.021 18.884-45.731t-19.02-45.594Q506.574-620 479.864-620t-45.595 19.021q-18.884 19.02-18.884 45.731 0 26.71 19.02 45.594 19.021 18.885 45.731 18.885ZM480-172.923q112.769-98.154 178.308-199.654 65.538-101.5 65.538-175.577 0-109.769-69.5-181.192T480-800.769q-104.846 0-174.346 71.423t-69.5 181.192q0 74.077 65.538 175.577Q367.231-271.077 480-172.923Zm0 53.692Q339-243.923 267.577-351.808q-71.423-107.884-71.423-196.346 0-126.923 82.654-209.385Q361.461-840 480-840t201.192 82.461q82.654 82.462 82.654 209.385 0 88.462-71.423 196.346Q621-243.923 480-119.231Zm0-436.154Z"/></svg>`,

  beach: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M774-156.923 532.308-397.077l28.308-28.308 241.692 241.693L774-156.923Zm-535.231-49.538q-40.769-50-60.538-108.846-19.77-58.847-19.77-119.924 0-71.077 26.308-137.769 26.308-66.692 80.154-119.769 53.846-53.847 120.654-80.27 66.808-26.423 136.346-26.423 61.846 0 120.193 19.885 58.346 19.885 109.115 60.654L238.769-206.461Zm4.923-62.001 72.462-72.461q-16-22.538-31.654-47.615t-27.654-53.231q-12-28.154-19.077-59.769-7.077-31.616-7.923-65.692-36.384 72.846-30.731 151.461 5.654 78.615 44.577 147.307Zm102.77-100.769 241.999-244q-43-33-87.653-51.961-44.654-18.962-84.577-25.308-39.923-6.346-72.346.192-32.423 6.539-50.193 24.308-17.769 18-24.307 50.423-6.539 32.423-.577 72.462 5.961 40.038 24.923 84.961 18.961 44.923 52.731 88.923Zm271.846-272.308L691.231-714q-69.923-41.231-148.923-45.846-79-4.616-151.846 30.461 35.077.077 66.692 7.923 31.615 7.847 59.769 19.731 28.154 11.885 53.5 27.539 25.346 15.653 47.885 32.653Z"/></svg>`,

  sign: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M460-120v-160H260L160-380l100-100h200v-80H200v-200h260v-80h40v80h200l100 100-100 100H500v80h260v200H500v160h-40ZM240-600h443.923l60-60-60-60H240v120Zm36.077 280H720v-120H276.077l-60 60 60 60ZM240-600v-120 120Zm480 280v-120 120Z"/></svg>',

  sailing: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M158.461-440 420-816.154V-440H158.461Zm76.078-40H380v-208.846L234.539-480Zm293.153 40q10.462-29.538 21.385-93Q560-596.461 560-660q0-69.692-10.808-132.231-10.808-62.538-20.731-99.308 57.154 27.231 108.039 73.154 50.885 45.923 89.769 105.077 38.885 59.154 63.616 128.731T819.231-440H527.692Zm52.462-40h194.154q-14.693-98.538-64.731-183.692-50.039-85.154-122.269-143.231 5.846 35.616 9.269 73.885Q600-694.769 600-660q0 45.462-5.654 91.615-5.654 46.154-14.192 88.385ZM360-195.385q-31.385 0-62.385-11.615-31-11.615-57.615-37.615-9.385 9.615-20.885 19.153-11.5 9.539-23.038 14.462-31.923-24.462-54.5-57.577Q119-301.692 106.154-340h747.692Q841-301.692 818.423-268.577T763.923-211q-11.538-4.923-23.038-14.462Q729.385-235 720-244.615q-26.846 26-57.731 37.615-30.884 11.615-62.269 11.615-31.385 0-62.769-11.615-31.385-11.615-57.231-38.385-25.846 26.77-57.231 38.385-31.384 11.615-62.769 11.615ZM100-60v-40h20q32 0 62.115-10 30.116-10 57.885-27.692 28.538 17.692 58.269 27.576Q328-100.231 360-100.231t61.615-9.885Q451.231-120 480-137.692q28.538 17.692 58.269 27.576Q568-100.231 600-100.231t62-9.885q30-9.884 58-27.576Q748.769-120 778.385-110 808-100 840-100h20v40h-20q-28.692 0-58.692-7.885-30-7.884-61.308-24.423-31.308 16.539-61.308 24.424Q628.692-60 600-60t-58.692-7.885q-30-7.884-61.308-24.423-31.308 16.539-61.308 24.424Q388.692-60 360-60t-58.692-7.885q-30-7.884-61.308-24.423-31.308 16.539-61.308 24.424Q148.692-60 120-60h-20Zm280-420Zm200.154 0Z"/></svg>`,

  forest: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M320-120v-160H75.384L234-520h-77.077L360-810.77l120 172 120-172L803.077-520H726l158.616 240H640v160h-80v-160H400v160h-80Zm298.231-200h192.692L652.077-560H726L600-740l-94.846 135.615L563.077-520H486l132.231 200Zm-469.154 0h421.846L412.077-560H486L360-740 234-560h73.923L149.077-320Zm0 0h158.846H234h252-73.923 158.846-421.846Zm469.154 0H486h77.077-57.923H726h-73.923 158.846-192.692ZM560-280h80-80Zm84.847 0Z"/></svg>`,

  menu: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>`,

  hiking: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m280-40 123-622q6-29 27-43.5t44-14.5q23 0 42.5 10t31.5 30l40 64q18 29 46.5 52.5T700-529v-71h60v560h-60v-406q-48-11-89-35t-71-59l-24 120 84 80v300h-80v-240l-84-80-72 320h-84Zm17-395-85-16q-16-3-25-16.5t-6-30.5l30-157q6-32 34-50.5t60-12.5l46 9-54 274Zm243-305q-33 0-56.5-23.5T460-820q0-33 23.5-56.5T540-900q33 0 56.5 23.5T620-820q0 33-23.5 56.5T540-740Z"/></svg>`,

  camping: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-100v-153.692l335.384-451.231L410-765.077l32.461-24.154L480-738.077l38.308-51.154L550-765.077l-44.615 60.154L840-253.692V-100H120Zm360-571L160-240.769V-140h130l190-265.385L670-140h130v-100.769L480-671ZM339.539-140h280.922L480-336.615 339.539-140ZM480-405.385 670-140 480-405.385 290-140l190-265.385Z"/></svg>`,

  remove: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M304.615-160q-26.846 0-45.731-18.884Q240-197.769 240-224.615V-720h-40v-40h160v-30.77h240V-760h160v40h-40v495.385Q720-197 701.5-178.5 683-160 655.385-160h-350.77ZM680-720H280v495.385q0 10.769 6.923 17.692T304.615-200h350.77q9.23 0 16.923-7.692Q680-215.385 680-224.615V-720ZM392.307-280h40.001v-360h-40.001v360Zm135.385 0h40.001v-360h-40.001v360ZM280-720v520-520Z"/></svg>`,

  close: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M256-227.692 227.692-256l224-224-224-224L256-732.308l224 224 224-224L732.308-704l-224 224 224 224L704-227.692l-224-224-224 224Z"/></svg>`,

  'add-media':`<svg aria-label="Icon to represent media such as images or videos" class="x1lliihq x1n2onr6" color="rgb(38, 38, 38)" fill="rgb(38, 38, 38)" height="77" role="img" viewBox="0 0 97.6 77.3" width="96"><title>Icon to represent media such as images or videos</title><path d="M16.3 24h.3c2.8-.2 4.9-2.6 4.8-5.4-.2-2.8-2.6-4.9-5.4-4.8s-4.9 2.6-4.8 5.4c.1 2.7 2.4 4.8 5.1 4.8zm-2.4-7.2c.5-.6 1.3-1 2.1-1h.2c1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1-1.7 0-3.1-1.4-3.1-3.1 0-.8.3-1.5.8-2.1z" fill="currentColor"></path><path d="M84.7 18.4 58 16.9l-.2-3c-.3-5.7-5.2-10.1-11-9.8L12.9 6c-5.7.3-10.1 5.3-9.8 11L5 51v.8c.7 5.2 5.1 9.1 10.3 9.1h.6l21.7-1.2v.6c-.3 5.7 4 10.7 9.8 11l34 2h.6c5.5 0 10.1-4.3 10.4-9.8l2-34c.4-5.8-4-10.7-9.7-11.1zM7.2 10.8C8.7 9.1 10.8 8.1 13 8l34-1.9c4.6-.3 8.6 3.3 8.9 7.9l.2 2.8-5.3-.3c-5.7-.3-10.7 4-11 9.8l-.6 9.5-9.5 10.7c-.2.3-.6.4-1 .5-.4 0-.7-.1-1-.4l-7.8-7c-1.4-1.3-3.5-1.1-4.8.3L7 49 5.2 17c-.2-2.3.6-4.5 2-6.2zm8.7 48c-4.3.2-8.1-2.8-8.8-7.1l9.4-10.5c.2-.3.6-.4 1-.5.4 0 .7.1 1 .4l7.8 7c.7.6 1.6.9 2.5.9.9 0 1.7-.5 2.3-1.1l7.8-8.8-1.1 18.6-21.9 1.1zm76.5-29.5-2 34c-.3 4.6-4.3 8.2-8.9 7.9l-34-2c-4.6-.3-8.2-4.3-7.9-8.9l2-34c.3-4.4 3.9-7.9 8.4-7.9h.5l34 2c4.7.3 8.2 4.3 7.9 8.9z" fill="currentColor"></path><path d="M78.2 41.6 61.3 30.5c-2.1-1.4-4.9-.8-6.2 1.3-.4.7-.7 1.4-.7 2.2l-1.2 20.1c-.1 2.5 1.7 4.6 4.2 4.8h.3c.7 0 1.4-.2 2-.5l18-9c2.2-1.1 3.1-3.8 2-6-.4-.7-.9-1.3-1.5-1.8zm-1.4 6-18 9c-.4.2-.8.3-1.3.3-.4 0-.9-.2-1.2-.4-.7-.5-1.2-1.3-1.1-2.2l1.2-20.1c.1-.9.6-1.7 1.4-2.1.8-.4 1.7-.3 2.5.1L77 43.3c1.2.8 1.5 2.3.7 3.4-.2.4-.5.7-.9.9z" fill="currentColor"></path></svg>`,

  expend: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M224.615-160Q197-160 178.5-178.5 160-197 160-224.615v-510.77Q160-763 178.5-781.5 197-800 224.615-800h224.616v40H224.615q-9.23 0-16.923 7.692Q200-744.615 200-735.385v510.77q0 9.23 7.692 16.923Q215.385-200 224.615-200h510.77q9.23 0 16.923-7.692Q760-215.385 760-224.615v-224.616h40v224.616Q800-197 781.5-178.5 763-160 735.385-160h-510.77Zm164.923-201.231-28.307-28.307L731.692-760H560v-40h240v240h-40v-171.692L389.538-361.231Z"/></svg>`,

  open:`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>`,

  dashBoard:`<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M430.308-352.308q18.615 18.616 47.769 16.962t42.538-20.962l210.154-292.923-294.461 208.616q-20.077 13.384-22.347 41.538-2.269 28.154 16.347 46.769ZM480-760q55.154 0 100.423 13.423t90.193 41.038l-36.77 24.924q-35.308-19.308-73.115-29.347Q522.923-720 480-720q-133 0-226.5 93.5T160-400q0 42 11.5 83t32.5 77h552q23-38 33.5-79t10.5-85q0-36-9.269-75.769-9.269-39.769-29.346-74.077l24.923-36.77q29.231 50.077 41.346 94.231 12.115 44.154 12.346 91.923.231 51.616-11.461 96.308-11.693 44.693-36.385 90.154-4.846 8-14.615 13-9.77 5-21.539 5H204q-11 0-20.385-5.384-9.384-5.385-15.769-15.693-19.846-35-33.846-78.961Q120-344 120-400q0-73.769 27.978-139.243 27.978-65.474 76.385-114.693 48.406-49.218 114.483-77.641Q404.923-760 480-760Zm1.615 278.385Z"/></svg>`,
  
  translate: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20"><path d="m480-126.77-44.92-134.75H192.62q-27.46-1-46.66-19.68-19.19-18.69-19.19-46.14v-439.9q0-26.45 19.19-46.22 19.2-19.77 46.66-19.77h197.53l45.31 134.75h331.92q26.31 0 46.08 19.76t19.77 46.06v439.9q0 27.45-19.77 46.72t-46.08 19.27H480ZM306.17-392.08q51.83 0 88.68-33.57 36.84-33.58 36.84-95.12 0-7.38-.31-13.61-.3-6.23-2.15-13.08H306v44h77.46q-2.61 31.08-24.69 48.42-22.08 17.35-52.65 17.35-35.05 0-59.43-25.08-24.38-25.08-24.38-60.61 0-34.54 24.31-60.12t59.25-25.58q14.59 0 28.25 5.43Q347.77-598.23 359-588l34.15-33.15q-18.46-17.08-41.17-25.31-22.72-8.23-46.17-8.23-54.81 0-93.15 38.54-38.35 38.54-38.35 92.77t38.44 92.76q38.44 38.54 93.42 38.54Zm233.06 32.46 17.46-17.46q-12.84-13.84-23.27-29-10.42-15.15-19.27-31.61l25.08 78.07Zm43.15-45.15q17.93-21.41 33.85-45.55 15.92-24.14 23.54-54.99H493.08l13 38.88 35.66-1q8.34 17.89 18.04 33.49 9.7 15.61 22.6 29.17Zm-57.46 233.08h242.46q8.62 0 14.77-5.62 6.16-5.61 6.16-15.3v-439.86q0-8.61-6.15-14.84t-14.76-6.23H446.69l34.32 110.69h73.82v-37.8h36.78v37.8h133.85v37.54h-47.14q-9.24 36.93-27.51 68.73-18.27 31.81-42.35 59.5L708-279.16l-26.69 26.7L583.38-350l-32.3 30.92 33.69 105.54-59.85 41.85Z"/></svg>',

  list:'<svg xmlns="http://www.w3.org/2000/svg" height="200" viewBox="0 -960 960 960" width="200" fill="lightgray"><path d="M318.52-300.41q11.81 0 19.72-7.96 7.91-7.97 7.91-19.79 0-11.81-7.96-19.72-7.96-7.91-19.78-7.91t-19.73 7.96q-7.91 7.96-7.91 19.78t7.96 19.73q7.97 7.91 19.79 7.91Zm0-151.9q11.81 0 19.72-7.96 7.91-7.97 7.91-19.78 0-11.82-7.96-19.73t-19.78-7.91q-11.82 0-19.73 7.96-7.91 7.97-7.91 19.78 0 11.82 7.96 19.73 7.97 7.91 19.79 7.91Zm0-151.9q11.81 0 19.72-7.96 7.91-7.96 7.91-19.78t-7.96-19.73q-7.96-7.91-19.78-7.91t-19.73 7.96q-7.91 7.97-7.91 19.79 0 11.81 7.96 19.72 7.97 7.91 19.79 7.91Zm126.92 293.03h216.51v-33.85H445.44v33.85Zm0-151.9h216.51v-33.84H445.44v33.84Zm0-151.89h216.51v-33.85H445.44v33.85ZM218.46-160q-24.58 0-41.52-16.94Q160-193.88 160-218.46v-523.08q0-24.58 16.94-41.52Q193.88-800 218.46-800h523.08q24.58 0 41.52 16.94Q800-766.12 800-741.54v523.08q0 24.58-16.94 41.52Q766.12-160 741.54-160H218.46Zm0-33.85h523.08q9.23 0 16.92-7.69 7.69-7.69 7.69-16.92v-523.08q0-9.23-7.69-16.92-7.69-7.69-16.92-7.69H218.46q-9.23 0-16.92 7.69-7.69 7.69-7.69 16.92v523.08q0 9.23 7.69 16.92 7.69 7.69 16.92 7.69Zm-24.61-572.3V-193.85-766.15Z"/></svg>',

  chart:'<svg xmlns="http://www.w3.org/2000/svg" height="200" viewBox="0 -960 960 960" width="200" fill="lightgray"><path d="M160-200v-400l129.23 96.92 198.46-279.23L666.15-640H800v440H160Zm161.13-70.92 160-220.67 285.02 222.05v-336.61H654.1L494.87-734.08l-198 278.67-103.02-76.9v159.39l127.28 102Z"/></svg>',


}

export const svgService = {
  getSvg: (name) => svgs[name]
}
