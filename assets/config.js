(function() {
    'use strict';
    var app;

    App.prefix = '';
    App.assets = 'assets/';
    App.globalLogo = '';

    App.json = {
        'app':[{
            'module': 'game',
            'settings': {
                'theme': {
                    
                    
                    
                    
                    'background_big':'Root/EAHP - 13-15 March 2013, Paris/Game/Backgrounds/Washy-Blue-Background.png',
                    
                },
                'sets': [
                    
                    {
                        'module': 'game.intro',
                        'settings': {
                            
                                'text': 'Welcome to the Bayer Knowledge Forum!',
                                'theme': {
                                    
                                    'background_big':'Root/EAHP - 13-15 March 2013, Paris/Game/Backgrounds/Washy-Blue-Background.png',
                                }
                            

                            

                            

                            

                            
                        }
                    },
                    
                    {
                        'module': 'game.questionset',
                        'settings': {
                            

                            

                            

                            

                            
                                'name': 'ACS Set 1',
                                'questions': [
                                    
                                    
                                    {
                                        'module': 'game.questionset.question',
                                        'settings': {
                                            'title': '<p style=\"\" margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:18.0pt;text-indent:-18.0pt;line-height:normal\"=\"\"><strong></strong><strong></strong>What is the name of the study programme that assessed Xarelto<sup>®</sup> for secondary prevention in adult patients following an  ACS?<strong></strong></p>',
                                            'text': 'ESC ACS 1',
                                            'reference': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;line-height:normal\"=\"\">Mega JL, Braunwald E, Mohanavelu S et al. Rivaroxaban versus placebo in patients with acute coronary syndromes (ATLAS ACS-TIMI 46): a randomised, double-blind, phase II trial. Lancet 2009;374:29–38.</p> <p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;line-height:normal\"\"=\"\"> </p> <p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;line-height:normal\"\"=\"\">Mega JL, et al; ATLAS ACS 2–TIMI 51 Investigators. Rivaroxaban in patients with a recent acute coronary syndrome. N Engl J Med. 2012;366(1):9-19.</p>',
                                            'explanation': '<p>ATLAS is the abbreviation for Anti_Xa Therapy to Lower cardiovascular events in addition to Aspirin with/without thienopyridine in Subjects with Acute Coronary Syndrome. It is an umbrella term for the clinical study programme of rivaroxaban in the secondary prevention of Acute Coronary Syndrome (ACS). Both studies compared rivaroxaban with placebo when added to antiplatelet therapy (ASA alone or ASA plus clopidogrel or ticlopidine). </p>',
                                            'order_in_set': 'Question 1',
                                            'options': [
                                                
                                                    
                                                    {
                                                        'text': 'The EINSTEIN programme',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': 'The ATLAS programme',
                                                        'correct': true
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': 'The ROCKET programme',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                
                                            ],
                                            'theme': {
                                                'primary_color':'',
                                                'secondary_color':'',
                                                'option_color':'',
                                                'logo':'Root/EAHP - 13-15 March 2013, Paris/Game/Logos/xareltologo.png'
                                            }
                                        }
                                    },
                                    
                                    {
                                        'module': 'game.questionset.question',
                                        'settings': {
                                            'title': '<p style=\"\" margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:18.0pt;text-indent:-18.0pt\"=\"\"><strong style=\"\" mso-bidi-font-weight:normal\"\"=\"\"></strong><strong></strong>How many adult patients were included in the phase III ATLAS ACS 2-TIMI 51 study?<strong></strong></p>',
                                            'text': 'ESC ACS 2',
                                            'reference': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;line-height:normal\"=\"\">Mega JL, et al; ATLAS ACS 2–TIMI 51 Investigators. Rivaroxaban in patients with a recent acute coronary syndrome. N Engl J Med. 2012;366(1):9-19.   </p>',
                                            'explanation': '<p>ATLAS ACS 2-TIMI 51 was a randomized, blinded, placebo-controlled clinical trial conducted in 44  countries and at 766 sites worldwide. The study included 15,526 patients</p>',
                                            'order_in_set': 'Question 2',
                                            'options': [
                                                
                                                    
                                                    {
                                                        'text': '4,546',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '10,454',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '15,526',
                                                        'correct': true
                                                    },
                                                    
                                                
                                                    
                                                
                                            ],
                                            'theme': {
                                                'primary_color':'',
                                                'secondary_color':'',
                                                'option_color':'',
                                                'logo':'Root/EAHP - 13-15 March 2013, Paris/Game/Logos/xareltologo.png'
                                            }
                                        }
                                    },
                                    
                                    {
                                        'module': 'game.questionset.question',
                                        'settings': {
                                            'title': 'What was the comparator in the ATLAS ACS 2-TIMI 51 study?',
                                            'text': 'ESC ACS 3',
                                            'reference': '<p>Mega JL, et al; ATLAS ACS 2–TIMI 51 Investigators. Rivaroxaban in patients with a recent acute coronary syndrome. N Engl J Med. 2012;366(1):9-19.</p>',
                                            'explanation': '<p>The ATLAS ACS 2-TIMI 51 trial compared doses of either 2.5 mg or 5 mg of rivaroxaban  or placebo. The trial assessed whether rivaroxaban reduces the risk of the composite of CV death, MI or stroke in patients after recent ACS, against a background of ASA alone or ASA plus clopidogrel or ticlopidine. </p>',
                                            'order_in_set': 'Question 3',
                                            'options': [
                                                
                                                    
                                                    {
                                                        'text': 'Placebo',
                                                        'correct': true
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': 'Vitamin K antagonist',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': 'Subcutaneous enoxaparin',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                
                                            ],
                                            'theme': {
                                                'primary_color':'',
                                                'secondary_color':'',
                                                'option_color':'',
                                                'logo':'Root/EAHP - 13-15 March 2013, Paris/Game/Logos/xareltologo.png'
                                            }
                                        }
                                    },
                                    
                                    {
                                        'module': 'game.questionset.question',
                                        'settings': {
                                            'title': '<p style=\"\" margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:18.0pt;text-indent:-18.0pt\"=\"\"><strong style=\"\" mso-bidi-font-weight:normal\"\"=\"\"></strong><strong></strong>Which dose of Xarelto<sup>®</sup> is recommended by EMA for the prevention of  atherothrombotic events in adult patients with elevated cardiac biomarkers after an ACS?<strong style=\"\" mso-bidi-font-weight:normal\"\"=\"\"></strong></p>',
                                            'text': 'ESC ACS 5',
                                            'reference': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;line-height:normal\"=\"\">Xarelto<sup>®</sup>  [summary of product characteristics]. Berlin, Germany: Bayer Pharma AG; June 2013.</p>',
                                            'explanation': '<p>The recommended dose of Xarelto<sup>®</sup>  is 2.5 mg twice daily, co-administered with ASA alone or with ASA plus clopidogrel or ticlopidine.&nbsp; </p>',
                                            'order_in_set': 'Question 4',
                                            'options': [
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:18.0pt;text-indent:-18.0pt\"=\"\">5 mg twice-daily in combination with standard antiplatelet therapy</p>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:18.0pt;text-indent:-18.0pt\"=\"\"><strong></strong>2.5 mg twice-daily  in combination with standard antiplatelet therapy<strong></strong></p>',
                                                        'correct': true
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:18.0pt;text-indent:-18.0pt\"=\"\">2.5 mg once-daily  in combination with standard antiplatelet therapy</p>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                
                                            ],
                                            'theme': {
                                                'primary_color':'',
                                                'secondary_color':'',
                                                'option_color':'',
                                                'logo':'Root/EAHP - 13-15 March 2013, Paris/Game/Logos/xareltologo.png'
                                            }
                                        }
                                    },
                                    
                                    {
                                        'module': 'game.questionset.question',
                                        'settings': {
                                            'title': '<p style=\"\" margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:18.0pt;text-indent:-18.0pt\"=\"\"><strong></strong>When should the initial dose of Xarelto<sup>®</sup> 2.5 mg twice daily be given to the patients for the prevention of atherothrombotic events in adult patients after an ACS with elevated cardiac biomarkers?<strong></strong></p>',
                                            'text': 'ESC ACS 6',
                                            'reference': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;line-height:normal\"=\"\">Xarelto<sup>®</sup>  [summary of product characteristics]. Berlin, Germany: Bayer Pharma AG; June 2013.</p>',
                                            'explanation': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt\"=\"\">Treatment of Xarelto<sup>®</sup> 2.5 mg twice daily should be started as soon as possible after stabilization of the ACS event (including revascularization procedures); at the earliest 24 hours after admission to hospital an at the time when parenteral anticoagulation would normally be discontinued. </p>',
                                            'order_in_set': 'Question 5',
                                            'options': [
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:18.0pt;text-indent:-18.0pt\"=\"\"><strong></strong><strong></strong>At the earliest 24 hours after admission to the hospital <strong></strong></p>',
                                                        'correct': true
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:18.0pt;text-indent:-18.0pt\"=\"\">In parallel with parenteral anticoagulation </p>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:18.0pt;text-indent:-18.0pt\"=\"\">At the earliest 5 days after admission to the hospital </p>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                
                                            ],
                                            'theme': {
                                                'primary_color':'',
                                                'secondary_color':'',
                                                'option_color':'',
                                                'logo':'Root/EAHP - 13-15 March 2013, Paris/Game/Logos/xareltologo.png'
                                            }
                                        }
                                    },
                                    
                                    {
                                        'module': 'game.questionset.question',
                                        'settings': {
                                            'title': '<div> <p>Can  Xarelto<sup>® </sup>2.5 mg twice daily be used&nbsp;in patients with severe renal impairment (creatinine clearance &lt;15 ml/min)?</p></div>',
                                            'text': 'ESC ACS 7',
                                            'reference': '<p>Xarelto<sup>®</sup>  [summary of product characteristics]. Berlin, Germany: Bayer Pharma AG; June 2013.</p>',
                                            'explanation': '<p>In patients with severe renal impairment (creatinine clearance &lt;30 ml/min) rivaroxaban plasma levels may be significantly increased (1.6 fold on average) which may lead to an increased bleeding risk. Xarelto<sup>®</sup>  is to be used with caution in patients with creatinine clearance 15 - 29 ml/min. Use is not recommended in patients with creatinine clearance &lt;15 ml/min (see sections 4.2 and 5.2).&nbsp;Xarelto<sup>®</sup> &nbsp;is to be used with caution in patients with moderate renal impairment (creatinine clearance&nbsp;30 - 49 ml/min) concomitantly receiving other medicinal products which increase rivaroxaban plasma&nbsp;concentrations.</p>',
                                            'order_in_set': 'Question 6',
                                            'options': [
                                                
                                                    
                                                    {
                                                        'text': 'Yes<span class=\"Apple-tab-span\" style=\"white-space:pre\"></span>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': 'Use with caution',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': 'Use not recommended',
                                                        'correct': true
                                                    },
                                                    
                                                
                                                    
                                                
                                            ],
                                            'theme': {
                                                'primary_color':'',
                                                'secondary_color':'',
                                                'option_color':'',
                                                'logo':'Root/EAHP - 13-15 March 2013, Paris/Game/Logos/xareltologo.png'
                                            }
                                        }
                                    },
                                    
                                ]
                            
                        }
                    },
                    
                    {
                        'module': 'game.outro',
                        'settings': {
                            

                            
                                'text': 'Thank you for your&nbsp;participation!',
                                'mp3_file': 'Root/Sounds/Xarelto_Soundlogo.mp3',
                                'ogg_file': '',
                                'theme': {
                                    
                                    
                                }
                            

                            

                            

                            
                        }
                    },
                    
                    {
                        'module': 'game.pause',
                        'settings': {
                            

                            

                            

                            
                                'src': 'Root/ESC 2013/Videos/ESC-ACSsp-16-9-MAIN-EDIT.mp4',
                                'type': 'video'
                            

                            
                        }
                    },
                    
                    {
                        'module': 'game.intro',
                        'settings': {
                            
                                'text': 'Welcome to the Bayer Knowledge Forum!',
                                'theme': {
                                    
                                    'background_big':'Root/EAHP - 13-15 March 2013, Paris/Game/Backgrounds/Washy-Blue-Background.png',
                                }
                            

                            

                            

                            

                            
                        }
                    },
                    
                    {
                        'module': 'game.questionset',
                        'settings': {
                            

                            

                            

                            

                            
                                'name': 'SPAF Set 1',
                                'questions': [
                                    
                                    
                                    {
                                        'module': 'game.questionset.question',
                                        'settings': {
                                            'title': 'If an adult patient, taking 20 mg Xarelto<sup>®</sup> for the prevention of stroke and systemic embolism in non-valvular atrial fibrillation, misses a dose, then he or she should...',
                                            'text': 'ESC SPAF 1',
                                            'reference': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;line-height:normal\"=\"\">Xarelto<sup>®</sup>  [summary of product characteristics]. Berlin, Germany: Bayer Pharma AG; June 2013.</p>',
                                            'explanation': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt\"=\"\">If a dose is missed the patient should take Xarelto<sup>®</sup> immediately and continue on the following day with the once daily intake as recommended. The dose should not be doubled within the same day to make up for a missed dose.</p>',
                                            'order_in_set': 'Question 1',
                                            'options': [
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;text-indent:-18.0pt\"=\"\">Wait until the next day to continue treatment</p>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;text-indent:-18.0pt\"=\"\"><strong></strong><strong></strong>Immediately take Xarelto<sup>®</sup> and continue on the following day with once-daily intake<strong></strong></p>',
                                                        'correct': true
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;text-indent:-18.0pt\"=\"\">Immediately take two doses of Xarelto<sup>®</sup></p>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                
                                            ],
                                            'theme': {
                                                'primary_color':'',
                                                'secondary_color':'',
                                                'option_color':'',
                                                'logo':'Root/EAHP - 13-15 March 2013, Paris/Game/Logos/xareltologo.png'
                                            }
                                        }
                                    },
                                    
                                    {
                                        'module': 'game.questionset.question',
                                        'settings': {
                                            'title': 'Which dose of Xarelto<sup>®</sup> is approved by EMA for the prevention of stroke and systemic embolism in adult patients with non-valvular atrial fibrillation who have no or only mild renal impairment (CrCl 50-80 mL/min)?',
                                            'text': 'ESC SPAF 2',
                                            'reference': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;line-height:normal\"=\"\">Xarelto<sup>®</sup>  [summary of product characteristics]. Berlin, Germany: Bayer Pharma AG; June 2013.</p>',
                                            'explanation': '<p>The recommended dose is 20 mg once daily, which is also the recommended maximum dose. Therapy with Xarelto<sup>®</sup> should be continued long term provided the benefit of prevention of stroke and systemic embolism outweighs the risk of bleeding. </p>',
                                            'order_in_set': 'Question 2',
                                            'options': [
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;text-indent:-18.0pt\"=\"\">30 mg once-daily </p>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;text-indent:-18.0pt\"=\"\"><strong></strong><strong></strong>20 mg once-daily  <strong></strong></p>',
                                                        'correct': true
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;text-indent:-18.0pt\"=\"\">10 mg once-daily  </p>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                
                                            ],
                                            'theme': {
                                                'primary_color':'',
                                                'secondary_color':'',
                                                'option_color':'',
                                                'logo':'Root/EAHP - 13-15 March 2013, Paris/Game/Logos/xareltologo.png'
                                            }
                                        }
                                    },
                                    
                                    {
                                        'module': 'game.questionset.question',
                                        'settings': {
                                            'title': 'For the prevention of stroke and systemic embolism in adult patients with non-valvular atrial fibrillation, the 15 mg dose should be used instead of the 20 mg dose for...',
                                            'text': 'ESC SPAF 3',
                                            'reference': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;line-height:normal\"=\"\">Xarelto<sup>®</sup>  [summary of product characteristics]. Berlin, Germany: Bayer Pharma AG; June 2013.</p>',
                                            'explanation': '<p>For the prevention of stroke and systemic embolism in adult patients with non-valvular atrial fibrillation, the recommended dose is as follows:</p><p>In adult patients with <strong>moderate (creatinine clearance 30 ‑&nbsp;49&nbsp;mL/min) renal impairment</strong> the recommended dose is <strong>15&nbsp;mg once daily</strong> (see section&nbsp;4.2 and 5.2. of SmPC).</p><p>In adult patients with <strong>severe (creatinine clearance 15&nbsp;‑&nbsp;29&nbsp;mL/min) renal impairment</strong>, the recommended dose is <strong>15&nbsp;mg once daily</strong>. However Xarelto® <strong>should be used with caution</strong> in this patient population (see section&nbsp;4.2 and 5.2. of SmPC).</p><p>Xarelto® <strong>is not recommended</strong> in adult patients with <strong>creatinine clearance &lt;15&nbsp;mL/min</strong> (see section&nbsp;4.2 and 5.2 of SmPC).</p><p><strong>No dose adjustment</strong> is necessary in adult patients with <strong>mild (creatinine clearance 50&nbsp;‑&nbsp;80&nbsp;mL/min) renal impairment</strong> (see section&nbsp;4.2 and 5.2 of SmPC).</p>',
                                            'order_in_set': 'Question 3',
                                            'options': [
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;text-indent:-18.0pt\"=\"\"><strong></strong><strong></strong>Patients with moderate (CrCl 30-49 mL/min) renal impairment <strong></strong></p>',
                                                        'correct': true
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;text-indent:-18.0pt\"=\"\">Patients with mild renal impairment (CrCl 50-80 mL/min)</p>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;text-indent:-18.0pt\"=\"\">Patients with creatinine clearance &lt;15 ml/min</p>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                
                                            ],
                                            'theme': {
                                                'primary_color':'',
                                                'secondary_color':'',
                                                'option_color':'',
                                                'logo':'Root/EAHP - 13-15 March 2013, Paris/Game/Logos/xareltologo.png'
                                            }
                                        }
                                    },
                                    
                                    {
                                        'module': 'game.questionset.question',
                                        'settings': {
                                            'title': 'Which of the following statements regarding dose adjustments of Xarelto<sup>®</sup> for patients with extreme body weight and/or elderly patients is correct?',
                                            'text': 'ESC SPAF 4',
                                            'reference': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;line-height:normal\"=\"\">Xarelto<sup>®</sup>  [summary of product characteristics]. Berlin, Germany: Bayer Pharma AG; June 2013.</p>',
                                            'explanation': '<p>No dose adjustment is necessary in elderly patients and in patients with extreme body weight. </p> <p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt\"=\"\">Elderly patients exhibited higher plasma concentrations than younger patients, with mean AUC values being approximately 1.5 fold higher, mainly due to reduced (apparent) total and renal clearance. However, no dose adjustment is necessary.  </p> <p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt\"=\"\">Extremes in body weight (&lt; 50 kg or &gt; 120 kg) had only a small influence on Xarelto<sup>®</sup> plasma concentrations (less than 25%). No dose adjustment is necessary.</p>',
                                            'order_in_set': 'Question 4',
                                            'options': [
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;text-indent:-18.0pt\"=\"\">Dose adjustment is necessary for elderly patients since elderly patients exhibit a higher plasma concentration </p>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;text-indent:-18.0pt\"=\"\">Dose adjustment is necessary in extreme body weights (&lt;50kg or &gt;120kg) </p>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;text-indent:-18.0pt\"=\"\"><strong></strong><strong></strong>No dose adjustments of Xarelto<sup>® </sup>is necessary for patients with extreme body weight and/or elderly patients<strong></strong></p>',
                                                        'correct': true
                                                    },
                                                    
                                                
                                                    
                                                
                                            ],
                                            'theme': {
                                                'primary_color':'',
                                                'secondary_color':'',
                                                'option_color':'',
                                                'logo':'Root/EAHP - 13-15 March 2013, Paris/Game/Logos/xareltologo.png'
                                            }
                                        }
                                    },
                                    
                                    {
                                        'module': 'game.questionset.question',
                                        'settings': {
                                            'title': 'Which of following medications should not be given concomitantly with Xarelto<sup>®</sup>?',
                                            'text': 'ESC SPAF 7<span class=\"Apple-tab-span\" style=\"white-space:pre\"></span>',
                                            'reference': '<p>Xarelto<sup>®</sup>  [summary of product characteristics]. Berlin, Germany: Bayer Pharma AG; June 2013.</p>',
                                            'explanation': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt\"=\"\">Given the limited clinical data available with dronedarone, co-administration with Xarelto<sup>®</sup> should be avoided. </p>',
                                            'order_in_set': 'Question 5',
                                            'options': [
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;text-indent:-18.0pt\"=\"\">Erythromycin </p>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;text-indent:-18.0pt\"=\"\">NSAIDs  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;text-indent:-18.0pt\"=\"\">Dronedarone </p>',
                                                        'correct': true
                                                    },
                                                    
                                                
                                                    
                                                
                                            ],
                                            'theme': {
                                                'primary_color':'',
                                                'secondary_color':'',
                                                'option_color':'',
                                                'logo':'Root/EAHP - 13-15 March 2013, Paris/Game/Logos/xareltologo.png'
                                            }
                                        }
                                    },
                                    
                                    {
                                        'module': 'game.questionset.question',
                                        'settings': {
                                            'title': '<p>For adult patients with non-valvular atrial fibrillation treated for prevention of stroke and systemic embolism, VKA treatment should be stopped and Xarelto<sup>®</sup> therapy should be initiated when the INR is...</p>',
                                            'text': 'ESC SPAF 6',
                                            'reference': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;line-height:normal\"=\"\">Xarelto<sup>®</sup>  [summary of product characteristics]. Berlin, Germany: Bayer Pharma AG; June 2013.</p>',
                                            'explanation': '<p>For patients treated for prevention of stroke and systemic embolism, VKA treatment should be stopped and Xarelto<sup>®</sup> therapy should be initiated when the INR is ≤ 3.0. </p>',
                                            'order_in_set': 'Question 6',
                                            'options': [
                                                
                                                    
                                                    {
                                                        'text': '<span style=\"text-decoration:underline\">&gt;</span>3.0',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '<span style=\"text-decoration:underline\">&lt;</span>3.0',
                                                        'correct': true
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '<span style=\"text-decoration:underline\">&gt;</span>3.5',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                
                                            ],
                                            'theme': {
                                                'primary_color':'',
                                                'secondary_color':'',
                                                'option_color':'',
                                                'logo':'Root/EAHP - 13-15 March 2013, Paris/Game/Logos/xareltologo.png'
                                            }
                                        }
                                    },
                                    
                                ]
                            
                        }
                    },
                    
                    {
                        'module': 'game.outro',
                        'settings': {
                            

                            
                                'text': 'Thank you for your&nbsp;participation!',
                                'mp3_file': 'Root/Sounds/Xarelto_Soundlogo.mp3',
                                'ogg_file': '',
                                'theme': {
                                    
                                    
                                }
                            

                            

                            

                            
                        }
                    },
                    
                    {
                        'module': 'game.pause',
                        'settings': {
                            

                            

                            

                            
                                'src': 'Root/ESC 2013/Videos/ESC-SPAF-16-9-MAIN-EDIT.mp4',
                                'type': 'video'
                            

                            
                        }
                    },
                    
                    {
                        'module': 'game.intro',
                        'settings': {
                            
                                'text': 'Welcome to the Bayer Knowledge Forum!',
                                'theme': {
                                    
                                    'background_big':'Root/EAHP - 13-15 March 2013, Paris/Game/Backgrounds/Washy-Blue-Background.png',
                                }
                            

                            

                            

                            

                            
                        }
                    },
                    
                    {
                        'module': 'game.questionset',
                        'settings': {
                            

                            

                            

                            

                            
                                'name': 'ESC PE 1',
                                'questions': [
                                    
                                    
                                    {
                                        'module': 'game.questionset.question',
                                        'settings': {
                                            'title': '<p>How many randomised patients were enrolled in the unique landmark EINSTEIN PE Trial?</p>',
                                            'text': 'ESC VTE 8',
                                            'reference': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt\"=\"\">The EINSTEIN Investigators. Oral Rivaroxaban for the Treatment of Symptomatic Pulmonary Embolism. N Engl J Med 2012; 366:1287-1297</p>',
                                            'explanation': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt\"=\"\">The EINSTEIN PE trial is a randomized, open-label, event-driven, noninferiority trial involving 4832 patients who had acute symptomatic PE with or without DVT which compared Xarelto<sup>®</sup> 15 mg twice daily for 3 weeks, followed by 20 mg once daily with standard therapy with enoxaparin followed by an adjusted-dose vitamin K antagonist for 3, 6, or 12 months. </p>',
                                            'order_in_set': 'Question 1',
                                            'options': [
                                                
                                                    
                                                    {
                                                        'text': '2540<span class=\"Apple-tab-span\" style=\"white-space:pre\"></span>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '4832',
                                                        'correct': true
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '6946',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                
                                            ],
                                            'theme': {
                                                'primary_color':'',
                                                'secondary_color':'',
                                                'option_color':'',
                                                'logo':'Root/EAHP - 13-15 March 2013, Paris/Game/Logos/xareltologo.png'
                                            }
                                        }
                                    },
                                    
                                    {
                                        'module': 'game.questionset.question',
                                        'settings': {
                                            'title': 'What was the comparator in the EINSTIN DVT and EINSTEIN PE study?',
                                            'text': 'ESC VTE 4',
                                            'reference': '<p>The EINSTEIN Investigators. Oral Rivaroxaban for Symptomatic Venous Thromboembolism. N Engl J Med 2010;363:2499-510.</p> <p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt\"=\"\">The EINSTEIN Investigators. <a></a>Oral Rivaroxaban for the Treatment of Symptomatic Pulmonary Embolism. N Engl J Med 2012; 366:1287-1297</p>',
                                            'explanation': '<p>EINSTEIN DVT and EINSTEIN PE compared oral rivaroxaban alone (15 mg twice daily for 3 weeks, followed by 20 mg once daily) with subcutaneous enoxaparin followed by a vitamin K antagonist  for 3, 6, or 12 months</p>',
                                            'order_in_set': 'Question 2',
                                            'options': [
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:53.4pt;text-indent:-18.0pt\"=\"\">Placebo </p>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:53.4pt;text-indent:-18.0pt\"=\"\">Subcutaneous enoxaparin alone</p>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:53.4pt;text-indent:-18.0pt\"=\"\"><strong style=\"\" mso-bidi-font-weight:normal\"\"=\"\"></strong><strong></strong>Subcutaneous enoxaparin followed by a vitamin k antagonist <strong></strong></p>',
                                                        'correct': true
                                                    },
                                                    
                                                
                                                    
                                                
                                            ],
                                            'theme': {
                                                'primary_color':'',
                                                'secondary_color':'',
                                                'option_color':'',
                                                'logo':'Root/EAHP - 13-15 March 2013, Paris/Game/Logos/xareltologo.png'
                                            }
                                        }
                                    },
                                    
                                    {
                                        'module': 'game.questionset.question',
                                        'settings': {
                                            'title': 'How often does Xarelto<sup>®</sup> have to be taken for the treatment of DVT and PE after the initial 3 week treatment period?',
                                            'text': 'ESC VTE 5',
                                            'reference': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;line-height:normal\"=\"\">Xarelto<sup>®</sup>  [summary of product characteristics]. Berlin, Germany: Bayer Pharma AG; June 2013.</p>',
                                            'explanation': 'Dosing Recommendations for Xarelto<sup>®</sup> for the initial treatment of acute DVT or PE is 15 mg twice daily for the first three weeks followed by 20 mg once daily for the continued treatment and prevention of recurrent DVT and PE.',
                                            'order_in_set': 'Question 3',
                                            'options': [
                                                
                                                    
                                                    {
                                                        'text': '3 times per day',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': 'once daily',
                                                        'correct': true
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': 'twice daily',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                
                                            ],
                                            'theme': {
                                                'primary_color':'',
                                                'secondary_color':'',
                                                'option_color':'',
                                                'logo':'Root/EAHP - 13-15 March 2013, Paris/Game/Logos/xareltologo.png'
                                            }
                                        }
                                    },
                                    
                                    {
                                        'module': 'game.questionset.question',
                                        'settings': {
                                            'title': 'In EINSTEIN PE which of the following statements regarding the primary safety outcome, first major or clinically relevant non-major bleeding events is correct?',
                                            'text': 'ESC VTE 9',
                                            'reference': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt\"=\"\">The EINSTEIN Investigators. Oral Rivaroxaban for the Treatment of Symptomatic Pulmonary Embolism. N Engl J Med 2012; 366:1287-1297</p>',
                                            'explanation': '<p>The principal safety outcome, a first major or clinically relevant non-major bleeding episode, occurred in 249 patients (10.3%) in the rivaroxaban group as compared with 274 patients (11.4%) in the standard-therapy group (hazard ratio, 0.90; 95% CI, 0.76 to 1.07; P = 0.23)</p>',
                                            'order_in_set': 'Question 4',
                                            'options': [
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;text-indent:-18.0pt\"=\"\">There were significantly more bleeding events in the Xarelto<sup>®&nbsp;</sup>group vs. standard therapy&nbsp;</p>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;text-indent:-18.0pt\"=\"\">There were significantly less bleeding events in the Xarelto<sup>®&nbsp;</sup>group vs. standard therapy</p>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': 'There was no difference between the Xarelto<sup>® </sup>group and the standard-therapy group',
                                                        'correct': true
                                                    },
                                                    
                                                
                                                    
                                                
                                            ],
                                            'theme': {
                                                'primary_color':'',
                                                'secondary_color':'',
                                                'option_color':'',
                                                'logo':'Root/EAHP - 13-15 March 2013, Paris/Game/Logos/xareltologo.png'
                                            }
                                        }
                                    },
                                    
                                    {
                                        'module': 'game.questionset.question',
                                        'settings': {
                                            'title': 'In EINSTEIN PE which of the following statements regarding major bleeding is correct?',
                                            'text': 'ESC VTE 10',
                                            'reference': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt\"=\"\">The EINSTEIN Investigators. Oral Rivaroxaban for the Treatment of Symptomatic Pulmonary Embolism. N Engl J Med 2012; 366:1287-1297</p>',
                                            'explanation': '<p>Major bleeding was observed in 26 patients (1.1%) in the rivaroxaban group and 52 patients (2.2%) in the standard-therapy group (hazard ratio, 0.49; 95% CI, 0.31 to 0.79; P = 0.003).</p>',
                                            'order_in_set': 'Question 5',
                                            'options': [
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;text-indent:-18.0pt\"=\"\">There were significantly more bleeding events in the&nbsp;Xarelto<sup>®</sup> group vs. standard therapy&nbsp;</p>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;text-indent:-18.0pt\"=\"\">There were significantly less bleeding events in the Xarelto<sup>®</sup> group vs. standard therapy</p>',
                                                        'correct': true
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;text-indent:-18.0pt\"=\"\">There was no difference between the Xarelto<sup>®</sup> group and the standard-therapy group </p>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                
                                            ],
                                            'theme': {
                                                'primary_color':'',
                                                'secondary_color':'',
                                                'option_color':'',
                                                'logo':'Root/EAHP - 13-15 March 2013, Paris/Game/Logos/xareltologo.png'
                                            }
                                        }
                                    },
                                    
                                    {
                                        'module': 'game.questionset.question',
                                        'settings': {
                                            'title': 'Which of the following statements is true?',
                                            'text': 'ESC VTE 7',
                                            'reference': '<p>Kubitza D., Becka M., Schwers S., et al. Investigation of Pharmacodynamic and Pharmacokinetic Interactions Between Rivaroxaban and Enoxaparin in Healthy Male Subjects. Clin Pharmacol Drug Dev first online: 15 MAY 2013. DOI: 10.1002/cpdd.26</p> <p>The EINSTEIN Investigators. Oral Rivaroxaban for the Treatment of Symptomatic Pulmonary Embolism. N Engl J Med 2012; 366:1287-1297</p> <p>The EINSTEIN Investigators. Oral Rivaroxaban for Symptomatic Venous Thromboembolism. N Engl J Med 2010;363:2499-510</p>',
                                            'explanation': '<p>Both Xarelto<sup>®</sup>   and enoxaparin have a comparable and rapid onset of action, as well as similar anti-factor Xa activity–time curves, indicating that both drugs have a similar duration of inhibiting factor  Xa. This suggests that, when transitioning from subcutaneously administered enoxaparin to oral Xarelto<sup>®</sup>  , overlap of administration (bridging therapy) is not necessary because Xarelto reaches its maximum pharmacological action at a similar time point to enoxaparin. Furthermore, in clinical studies (EINSTEIN) Xarelto<sup>®</sup>   has proved to be effective when given as single oral agent for patients with VTE.</p>',
                                            'order_in_set': 'Question 6',
                                            'options': [
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;text-indent:-18.0pt\"=\"\">The low molecular weight heparin enoxaparin has a much faster onset of action than Xarelto<sup>®</sup> because it is given as an injection  </p>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;text-indent:-18.0pt\"=\"\">When transitioning from subcutaneously administered enoxaparin to oral Xarelto<sup>®,</sup> bridging therapy is necessary because of the slow onset of action of Xarelto<sup>®</sup></p>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-bottom:0cm;margin-bottom:.0001pt;text-indent:-18.0pt\"=\"\">Xarelto<sup>®</sup> has a fast onset of action, comparable to enoxaparin, and has proved to be effective when given as single oral agent for patients with VTE</p>',
                                                        'correct': true
                                                    },
                                                    
                                                
                                                    
                                                
                                            ],
                                            'theme': {
                                                'primary_color':'',
                                                'secondary_color':'',
                                                'option_color':'',
                                                'logo':'Root/EAHP - 13-15 March 2013, Paris/Game/Logos/xareltologo.png'
                                            }
                                        }
                                    },
                                    
                                ]
                            
                        }
                    },
                    
                    {
                        'module': 'game.outro',
                        'settings': {
                            

                            
                                'text': 'Thank you for your&nbsp;participation!',
                                'mp3_file': 'Root/Sounds/Xarelto_Soundlogo.mp3',
                                'ogg_file': '',
                                'theme': {
                                    
                                    
                                }
                            

                            

                            

                            
                        }
                    },
                    
                    {
                        'module': 'game.pause',
                        'settings': {
                            

                            

                            

                            
                                'src': 'Root/ESC 2013/Videos/ESC-PE-16-9-MAIN-EDIT.mp4',
                                'type': 'video'
                            

                            
                        }
                    },
                    
                    {
                        'module': 'game.intro',
                        'settings': {
                            
                                'text': 'Welcome to the Bayer Knowledge Forum!',
                                'theme': {
                                    
                                    'background_big':'Root/EAHP - 13-15 March 2013, Paris/Game/Backgrounds/Washy-Blue-Background.png',
                                }
                            

                            

                            

                            

                            
                        }
                    },
                    
                    {
                        'module': 'game.questionset',
                        'settings': {
                            

                            

                            

                            

                            
                                'name': 'ESC Nebido Ultravist',
                                'questions': [
                                    
                                    
                                    {
                                        'module': 'game.questionset.question',
                                        'settings': {
                                            'title': '<br><p>Hypogonadism (low testosterone) can be associated with central obesity, insulin resistance, low HDL cholesterol, high LDL cholesterol, and high triglyceride levels. True or false? </p>',
                                            'text': 'ESC Nebido 2',
                                            'reference': '',
                                            'explanation': '',
                                            'order_in_set': 'Question 1',
                                            'options': [
                                                
                                                    
                                                    {
                                                        'text': 'True<span class=\"Apple-tab-span\" style=\"white-space:pre\">  </span>',
                                                        'correct': true
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': 'False',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                
                                                    
                                                
                                            ],
                                            'theme': {
                                                'primary_color':'#e3c30e',
                                                'secondary_color':'#e3c30e',
                                                'option_color':'',
                                                'logo':'Root/EAHP - 13-15 March 2013, Paris/Game/Logos/Nebido_Logo.png'
                                            }
                                        }
                                    },
                                    
                                    {
                                        'module': 'game.questionset.question',
                                        'settings': {
                                            'title': '<p>Potential clinical benefits of testosterone replacement therapy in men with hypogonadism (low Testosterone) are...</p>',
                                            'text': 'ESC Nebido 3',
                                            'reference': '',
                                            'explanation': '',
                                            'order_in_set': 'Question 2',
                                            'options': [
                                                
                                                    
                                                    {
                                                        'text': '<p>Improved body composition</p>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '<p>Increased insulin sensitivity</p>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '<p>Improved depressive mood</p>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': 'All of the above',
                                                        'correct': true
                                                    },
                                                    
                                                
                                            ],
                                            'theme': {
                                                'primary_color':'#e3c30e',
                                                'secondary_color':'#e3c30e',
                                                'option_color':'',
                                                'logo':'Root/EAHP - 13-15 March 2013, Paris/Game/Logos/Nebido_Logo.png'
                                            }
                                        }
                                    },
                                    
                                    {
                                        'module': 'game.questionset.question',
                                        'settings': {
                                            'title': '<p>What is the key symptom of male hypogonadism (low testosterone)?</p>',
                                            'text': 'ESC Nebido 1',
                                            'reference': '',
                                            'explanation': '',
                                            'order_in_set': 'Question 3',
                                            'options': [
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-left:72.0pt;text-indent:-18.0pt\"=\"\">Erectile dysfunction / Loss of libido</p>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-left:72.0pt;text-indent:-18.0pt\"=\"\">Visceral obesity</p>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': 'All of the above',
                                                        'correct': true
                                                    },
                                                    
                                                
                                                    
                                                
                                            ],
                                            'theme': {
                                                'primary_color':'#e3c30e',
                                                'secondary_color':'#e3c30e',
                                                'option_color':'',
                                                'logo':'Root/EAHP - 13-15 March 2013, Paris/Game/Logos/Nebido_Logo.png'
                                            }
                                        }
                                    },
                                    
                                    {
                                        'module': 'game.questionset.question',
                                        'settings': {
                                            'title': 'Ultravist is approved for...',
                                            'text': 'ESC Ultravist 1<span class=\"Apple-tab-span\" style=\"white-space:pre\"></span>',
                                            'reference': '',
                                            'explanation': '',
                                            'order_in_set': 'Question 4',
                                            'options': [
                                                
                                                    
                                                    {
                                                        'text': 'MR procedures<span class=\"Apple-tab-span\" style=\"white-space:pre\"></span>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': 'For all modern X-Ray examinations',
                                                        'correct': true
                                                    },
                                                    
                                                
                                                    
                                                
                                                    
                                                
                                            ],
                                            'theme': {
                                                'primary_color':'#00cfe6',
                                                'secondary_color':'#00cfe6',
                                                'option_color':'',
                                                'logo':'Root/EAHP - 13-15 March 2013, Paris/Game/Logos/Ultravist_Logo.png'
                                            }
                                        }
                                    },
                                    
                                    {
                                        'module': 'game.questionset.question',
                                        'settings': {
                                            'title': 'Ultravist delivers...',
                                            'text': 'ESC Ultravist 2',
                                            'reference': '',
                                            'explanation': '',
                                            'order_in_set': 'Question 5',
                                            'options': [
                                                
                                                    
                                                    {
                                                        'text': 'The contrast for consistently high-quality imaging results',
                                                        'correct': true
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': 'The contrast for low-quality imaging results',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                
                                                    
                                                
                                            ],
                                            'theme': {
                                                'primary_color':'#00cfe6',
                                                'secondary_color':'#00cfe6',
                                                'option_color':'',
                                                'logo':'Root/EAHP - 13-15 March 2013, Paris/Game/Logos/Ultravist_Logo.png'
                                            }
                                        }
                                    },
                                    
                                    {
                                        'module': 'game.questionset.question',
                                        'settings': {
                                            'title': 'Ultravist has...',
                                            'text': 'ESC Ultravist 3',
                                            'reference': '',
                                            'explanation': '',
                                            'order_in_set': 'Question 6',
                                            'options': [
                                                
                                                    
                                                    {
                                                        'text': 'A nice brand color.<span class=\"Apple-tab-span\" style=\"white-space:pre\"></span>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': 'A well documented safety profile.',
                                                        'correct': true
                                                    },
                                                    
                                                
                                                    
                                                
                                                    
                                                
                                            ],
                                            'theme': {
                                                'primary_color':'#00cfe6',
                                                'secondary_color':'#00cfe6',
                                                'option_color':'',
                                                'logo':'Root/EAHP - 13-15 March 2013, Paris/Game/Logos/Ultravist_Logo.png'
                                            }
                                        }
                                    },
                                    
                                ]
                            
                        }
                    },
                    
                    {
                        'module': 'game.outro',
                        'settings': {
                            

                            
                                'text': 'Thank you for your&nbsp;participation!',
                                'mp3_file': '',
                                'ogg_file': '',
                                'theme': {
                                    
                                    
                                }
                            

                            

                            

                            
                        }
                    },
                    
                    {
                        'module': 'game.pause',
                        'settings': {
                            

                            

                            

                            
                                'src': 'Root/ESC 2013/Videos/Bayer_ACS_SPAF_Showcases_Day3.mp4',
                                'type': 'video'
                            

                            
                        }
                    },
                    
                    {
                        'module': 'game.intro',
                        'settings': {
                            
                                'text': 'Welcome to the Bayer Knowledge Forum!',
                                'theme': {
                                    
                                    'background_big':'Root/EAHP - 13-15 March 2013, Paris/Game/Backgrounds/Washy-Blue-Background.png',
                                }
                            

                            

                            

                            

                            
                        }
                    },
                    
                    {
                        'module': 'game.questionset',
                        'settings': {
                            

                            

                            

                            

                            
                                'name': 'ESC Aspirin',
                                'questions': [
                                    
                                    
                                    {
                                        'module': 'game.questionset.question',
                                        'settings': {
                                            'title': 'Low dose Aspirin has a unique mode of action, because?',
                                            'text': 'ESC Aspirin 1',
                                            'reference': 'Cattela-Lawson F, Reilly MP, Kapoor SC, et al Cyclooxygenase inhibitors and the antiplatelet effects of aspirin. N Engl J Med. 2001; 345:1809-1817',
                                            'explanation': '',
                                            'order_in_set': 'Question 1',
                                            'options': [
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-left:36.0pt;text-indent:-18.0pt\"=\"\">It irreversibly modifies platelet COX, inhibiting the production of thromboxane A2</p>',
                                                        'correct': true
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-left:36.0pt;text-indent:-18.0pt\"=\"\">It reversibly modifies only platelet COX 2 </p>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-left:36.0pt;text-indent:-18.0pt\"=\"\">It activates glycoprotein IIb/IIIa receptors on the platelet surfaces </p>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                
                                            ],
                                            'theme': {
                                                'primary_color':'#009b78',
                                                'secondary_color':'#009b78',
                                                'option_color':'',
                                                'logo':'Root/EAHP - 13-15 March 2013, Paris/Game/Logos/AC_BrandIdentity_RGB_2012-1.jpg'
                                            }
                                        }
                                    },
                                    
                                    {
                                        'module': 'game.questionset.question',
                                        'settings': {
                                            'title': 'Aspirin<sup>®</sup> is a well-known modern medicine with ancient roots, when was Aspirin first branded and brought to the market by Bayer?',
                                            'text': 'ESC Aspirin 3',
                                            'reference': 'Dreser H. Pharmacologisches ueber aspirin (acetilsalicylsauere). Pfluegers Arch. 1899; 76: 306-318',
                                            'explanation': '',
                                            'order_in_set': 'Question 2',
                                            'options': [
                                                
                                                    
                                                    {
                                                        'text': 'In 1650',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': 'In 1899',
                                                        'correct': true
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': 'In 1999',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                
                                            ],
                                            'theme': {
                                                'primary_color':'#009b78',
                                                'secondary_color':'#009b78',
                                                'option_color':'',
                                                'logo':'Root/EAHP - 13-15 March 2013, Paris/Game/Logos/AC_BrandIdentity_RGB_2012-1.jpg'
                                            }
                                        }
                                    },
                                    
                                    {
                                        'module': 'game.questionset.question',
                                        'settings': {
                                            'title': 'To what extent does low-dose aspirin reduce the risk of ischemic stroke in a secondary CVD prevention setting?',
                                            'text': 'ESC Aspirin 2',
                                            'reference': 'Antithrombotic Trialists’ (ATT) Collaboration: Aspirin in the primary and secondary prevention of vascular disease: collaborative meta-analysis of individual participant data from randomised clinical trials. The Lancet 2009; 373: 1849–1860.',
                                            'explanation': '',
                                            'order_in_set': 'Question 3',
                                            'options': [
                                                
                                                    
                                                    {
                                                        'text': '-19%',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '-22%',
                                                        'correct': true
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '-14%',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                
                                            ],
                                            'theme': {
                                                'primary_color':'#009b78',
                                                'secondary_color':'#009b78',
                                                'option_color':'',
                                                'logo':'Root/EAHP - 13-15 March 2013, Paris/Game/Logos/AC_BrandIdentity_RGB_2012-1.jpg'
                                            }
                                        }
                                    },
                                    
                                    {
                                        'module': 'game.questionset.question',
                                        'settings': {
                                            'title': 'According to all major guidelines, how long should the treatment with Aspirin be continued for patients with established CVD?',
                                            'text': 'ESC Aspirin 4',
                                            'reference': 'AHA/ASA Guidelines for the Primary Prevention of Stroke: A Guideline for Healthcare Professionals; Stroke 2011, 42:227–276.    <div> Reappraisal of European guidelines on hypertension management: a European Society of Hypertension Task Force document; J Hypertens. 2009 Nov;27(11):2121–58.&nbsp;  <br></div>',
                                            'explanation': '',
                                            'order_in_set': 'Question 4',
                                            'options': [
                                                
                                                    
                                                    {
                                                        'text': '12 months',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': 'Up to 3 years',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': 'Life-long',
                                                        'correct': true
                                                    },
                                                    
                                                
                                                    
                                                
                                            ],
                                            'theme': {
                                                'primary_color':'#009b78',
                                                'secondary_color':'#009b78',
                                                'option_color':'',
                                                'logo':'Root/EAHP - 13-15 March 2013, Paris/Game/Logos/AC_BrandIdentity_RGB_2012-1.jpg'
                                            }
                                        }
                                    },
                                    
                                    {
                                        'module': 'game.questionset.question',
                                        'settings': {
                                            'title': 'What is special about Aspirin<sup>®</sup> Cardio?',
                                            'text': 'ESC Aspirin 5',
                                            'reference': '',
                                            'explanation': '',
                                            'order_in_set': 'Question 5',
                                            'options': [
                                                
                                                    
                                                    {
                                                        'text': '<p>It has a special enteric coating formulation for better GI tolerability in long-term use</p>',
                                                        'correct': true
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '<p>The Aspirin Cardio pill is shaped like a heart </p>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '<p>It has a red colored coating with a cherry taste</p>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                
                                            ],
                                            'theme': {
                                                'primary_color':'#009b78',
                                                'secondary_color':'#009b78',
                                                'option_color':'',
                                                'logo':'Root/EAHP - 13-15 March 2013, Paris/Game/Logos/AC_BrandIdentity_RGB_2012-1.jpg'
                                            }
                                        }
                                    },
                                    
                                    {
                                        'module': 'game.questionset.question',
                                        'settings': {
                                            'title': 'In 1982, Sir John R. Vane received the Nobel Prize of Medicine. What was his ground-breaking discovery?',
                                            'text': 'ESC Aspirin 6',
                                            'reference': '<p>Vane JR. Inhibition of prostaglandin synthesis as a mechanism of action for the aspirin-like drugs. Nat New Biol. 1971; 231:237-239</p>',
                                            'explanation': '',
                                            'order_in_set': 'Question 6',
                                            'options': [
                                                
                                                    
                                                    {
                                                        'text': 'He discovered that a compound called salicin in willow bark could reduce pain and fever',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-left:36.0pt;text-indent:-18.0pt\"=\"\">He found out, that Aspirin powder turns pink under fluorescent light</p>',
                                                        'correct': false
                                                    },
                                                    
                                                
                                                    
                                                    {
                                                        'text': '<p style=\"\" margin-left:36.0pt;text-indent:-18.0pt\"=\"\">He discovered how Aspirin blocked the synthesis of prostaglandins </p>',
                                                        'correct': true
                                                    },
                                                    
                                                
                                                    
                                                
                                            ],
                                            'theme': {
                                                'primary_color':'#009b78',
                                                'secondary_color':'#009b78',
                                                'option_color':'',
                                                'logo':'Root/EAHP - 13-15 March 2013, Paris/Game/Logos/AC_BrandIdentity_RGB_2012-1.jpg'
                                            }
                                        }
                                    },
                                    
                                ]
                            
                        }
                    },
                    
                    {
                        'module': 'game.outro',
                        'settings': {
                            

                            
                                'text': 'Thank you for your&nbsp;participation!',
                                'mp3_file': '',
                                'ogg_file': '',
                                'theme': {
                                    
                                    
                                }
                            

                            

                            

                            
                        }
                    },
                    
                    {
                        'module': 'game.pause',
                        'settings': {
                            

                            

                            

                            
                                'src': 'Root/ESC 2013/Videos/Bayer_ACS_SPAF_Showcases_Day3.mp4',
                                'type': 'video'
                            

                            
                        }
                    },
                    
                ]
            }
        }]
    };

    window.addEventListener('load', function(e){
        app = new App({
            path_or_json: App.json
        });

        window.app = app;
        app.play();
    });

    window.addEventListener('touchstart', function() {
        document.getElementsByTagName('audio').each(function(elt) {
            elt.play();
            elt.pause();
        });
    });
})();