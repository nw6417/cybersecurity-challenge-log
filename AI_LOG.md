Entry 1: Inspect HTML Challenge

What I asked: I asked AI for help understanding my cybersecurity challenge.

What AI provided: AI explained how to inspect a webpages HTML source code.

How I verified it: I inspected the webpage source myself and found the flag.

What I learned: Information in HTML source code can be seen by anybody who checks it, so sensitive information should not be placed there at all.


Entry 2: Log Hunt Challenge

What I asked: I asked AI to help me solve the Log Hunt challenge using hints.

What AI provided: AI hinted that I should look for the [FLAGPART] entries in the server logs, identify the four unique pieces, ignore repeated pieces.

How I verified it: I assembled " academy{us3_y0urlinux_sk1lls_cedfa5fb}" by writing it down on paper and submitted it through my computer and CyLab accepted it.

What I learned: Server logs can expose sensitive information, and repeated pieces must be handled carefully.


Entry 3: Mod 26 Challenge

What I asked: I asked AI for help understanding the Mod 26 cryptography challenge.

What AI provided: AI explained to me what ROT13 is and how it shifts each letter 13 places in the alphabet.

How I verified it: I decoded the message on paper again and got "academy{next_time_I'll_try_2_rounds_of_rot13_5c5f5b36}" which was correct.

What I learned: I learned that ROT13 is easy to reverse and shouldn't be used to protect sensitive information.


Example of how AI assisted me:

What happened - AI gave me hints during Log Hunt by helping me look for unique flag pieces and noting how they look different from the rest of the file. For Mod 26 AI gives me instruction on how ROT13 works, which helped me decode the message.

How I verified - I assembled the Log Hunt flag and Cylab accepted it. for Mod 26 I decoded the message on paper and compared my result.

What I learned - Hints help me solve challenges and understand the process myself, while getting the answers directly gives me less practice.


Entry 4: The Numbers Challenge

What I asked: I asked AI to check my answer to the The Numbers cryptography challenge.

What AI provided: AI helped verify how the numbers corresponded to letters in the alphabet.

How I verified it: I decoded the numbers myself using A = 1, B = 2, C = 3, and checked my answer with AI.

What I learned: Numbers can represent letters, and simple number codes are easy to decode when you recognize the pattern.



Entry 5: 13 Challenge

What I asked: I asked AI to check my answer to the 13 cryptography challenge.

What AI provided: AI helped verify my ROT13-decoded message.

How I verified it: I decoded the message myself and compared my result with AI's answer.

What I learned: ROT13 shifts letters by 13 places and is easy to reverse, so it should not be used to protect sensitive information.



Entry 6: Crack the Gate 1 Challenge

What I asked: I asked AI for help understanding the challenge's webpage source code.

What AI provided: AI helped me understand the ROT13-encoded developer comment and identify the hidden header X-Dev-Access: yes.

How I verified it: I used the header in the challenge's login request and checked the response. The challenge returned the flag academy{brut4_f0rc4_0c4546d5}.

What I learned: Developers can accidentally expose hidden access methods in webpage source code. I also learned how to inspect code and test a clue in a practice challenge.




Entry 7: Obedient Cat Challenge

What I asked: I asked AI for help understanding how to download and read the provided file.

What AI provided: AI gave me hints about using terminal commands to download the file with wget and read its contents.

How I verified it: I downloaded the file and read its contents in the terminal, which revealed the flag.

What I learned: Files can contain information in plain text that is easy to find.




Entry 8: Strings It Challenge

What I asked: I asked AI for a hint to help me find the flag in the provided file.

What AI provided: AI gave me a Socratic hint explaining that readable text could be hidden inside the file and pointed me toward the strings command without giving me the flag.

How I verified it: I found the flag myself.

What I learned: Files can contain readable text even when most of their contents look like machine code. Sensitive information should not be left exposed in compiled files.




Entry 9: Caesar Challenge

What I asked: I asked AI for a hint to help me decrypt the Caesar cipher message.

What AI provided: AI explained that a Caesar cipher shifts letters by a fixed number of positions and gave me a Socratic hint to try shifting the letters until the message became readable. AI initially revealed the answer too early, so I asked it not to reveal it again.

How I verified it: I decrypted the message myself and got "academy{crossingtherubiconksxxkuqt}".

What I learned: Caesar ciphers use fixed letter shifts to hide messages, but they are easy to break because there are only a limited number of possible shifts.





Entry 10: So Meta Challenge

What I asked: I asked AI for help understanding where to find the flag hidden in the picture.

What AI provided: AI explained what metadata is and gave me a Socratic hint to look for information stored inside the image file. When Windows Properties did not show anything useful, AI suggested using ExifTool and looking at the Artist field.

How I verified it: I inspected the image metadata and found "academy{s0_m3ta_d4aa0408}". I submitted the flag through CyLab, and it accepted it.

What I learned: Image files can contain hidden metadata that is not visible when viewing the picture. Metadata can accidentally expose sensitive information when files are shared.


Entry 11: Bandit Level 0

What I asked: I asked AI how to get started again with OverTheWire Bandit after being away for several weeks.

What AI provided: AI guided me through reconnecting to the Bandit server using SSH and retrieving the Level 1 password by reading the readme file with cat.

How I verified it: I used the password to log into Bandit Level 1 successfully.

What I learned: I learned how to reconnect to a remote server using SSH and retrieve information from a file using the terminal.




Entry 12: Bandit Level 1

What I asked: I asked AI for hints to help me find the password stored in a file named "-".

What AI provided: AI gave me Socratic hints explaining that ./ can identify a file in the current directory and helped me understand why the dash in the filename caused a problem.

How I verified it: I used cat ./- to display the file contents and retrieve the password for Level 2.

What I learned: I learned that unusual filenames can affect how Linux interprets commands, and that ./ can help access files with special names.


Entry 13: Bandit Level 2

What I asked: I asked AI for hints to help me read a file with spaces and dashes in its filename.

What AI provided: AI gave me Socratic hints about using quotation marks to keep the filename together and explained the purpose of --. When my first attempts failed, AI used the error message to guide me toward the correct command structure.

How I verified it: I ran the corrected command and successfully displayed the file contents, which gave me the password for Level 3.

What I learned: I learned how quotation marks and -- help Linux commands handle filenames containing spaces and leading dashes.




Example of How AI Assisted Me  (CYLAB)

What happened: AI gave me Socratic hints for Obedient Cat by guiding me toward downloading and reading the file. For Strings It, AI pointed me toward the strings command without revealing the flag. For Caesar, AI explained letter shifts and guided me to try different shifts. For So Meta, AI explained metadata and suggested using ExifTool.

How I verified: I downloaded and read the Obedient Cat file, found the Strings It flag myself, decrypted the Caesar message, and inspected the So Meta image metadata. I submitted the So Meta flag through CyLab, and it accepted it.

What I learned: Socratic hints help me understand clues and solve challenges independently. Getting answers too early gives me less practice, so I should use AI to guide my reasoning rather than do the work for me.


Example of How AI Assisted Me PT. 2 (BANDIT)

What happened: AI helped me reconnect to Bandit Level 0 and gave me Socratic hints for Levels 1 and 2. It guided me through understanding unusual filenames, hidden command options, and how to use terminal commands.

How I verified: I successfully retrieved each level's password and used it to access the next Bandit level.

What I learned: AI can help me understand Linux commands through hints instead of simply giving me answers. Working through errors and figuring out the commands myself helped me learn how the terminal works.

