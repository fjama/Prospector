routes

search              -> GET /search/{dropdown category}/text/{search text}
                    -> POST /searchstudent
                        -   DATA TO SEND BACK 
                            type: JSON { studentSFSUId }

signin              -> POST /signin
                        -   DATA TO SEND BACK 
                            type: JSON { email, password }

signup              -> POST /signUp/professor
                        -   DATA TO SEND BACK 
                            type: JSON { email, password, firstName, lastName, university }

                    -> POST /signUp/recruiter
                        -   DATA TO SEND BACK 
                            type: JSON { email, password, companyName, decription, addressId, websiteLink }

                    -> POST /signUp/student 
                        -   DATA TO SEND BACK 
                            type: JSON { email, password, studentSFSUId, firstName, lastName, addressId,
                                ethnicity, major, gender, veteranStatus, lgbtqStatus, financialAidStatus, 
                                disabilityStatus, firstGeneration
                            }
             
resume              -> (resume upload) POST /upload 
                        -   DATA TO SEND BACK 
                            type: form-data { resume file, userId }

                    -> (resume update) POST /update/resume 
                        - DATA TO SEND BACK
                            type: form-data { resume file, userId }
                    
                    -> (retrieve resume) GET /resume
                        -   DATA TO SEND BACK 
                                type: JSON { userId }

                        - - how to find userId for testing purposes - -
                            - use csc649Team2 server DB
                            - 'SELECT userId FROM images'

recommendation      -> POST /addrec
                        -   DATA TO SEND BACK 
                            type: JSON { studentSFSUId, professorId, rating, recommendationText }

save searches       -> /savesearch/option/{dropdown category}/text/{text}
                        -   DATA TO SEND BACK 
                            type: JSON { recruiterId }

recruiter           -> (update) POST /update/recruiter
                        -   DATA TO SEND BACK 
                            type: JSON { userId, email, password, companyName, description, addressId, websiteLink }

                    -> (delete) POST /delete/recruiter
                        -   DATA TO SEND BACK 
                            type: JSON { userId }

professor           -> (update) POST /update/professor
                        -   DATA TO SEND BACK 
                            type: JSON { userId, email, password, firstName, lastName, university }

                    -> (delete) POST /delete/professor
                        -   DATA TO SEND BACK 
                            type: JSON { userId }

student             -> (update) POST /update/student
                        -   DATA TO SEND BACK 
                            type: JSON { userId, email, password, studentSFSUId, firstName, lastName, addressId,
                                        ethnicity, major, gender, veteranStatus, lgbtqStatus, financialAidStatus, 
                                        disabilityStatus, firstGeneration }

                    -> (delete) POST /delete/student
                        -   DATA TO SEND BACK 
                            type: JSON { userId }

get Match           -> POST /getmatches
                        -   DATA TO SEND BACK 
                            type: JSON { userId }

