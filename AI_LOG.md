Entry 1: Inspect HTML Challenge

What I asked: I asked AI for help understanding my cybersecurity challenge.

What AI provided: AI gave me guidance on how to inspect a webpage's HTML source code.

How I verified it: I inspected the webpage source myself and found the flag.

What I learned: Information in HTML source code can be seen by anybody who checks it, so sensitive information should not be placed there at all.


Entry 2: Log Hunt Challenge

What I asked: I asked AI to help me solve the Log Hunt challenge using hints.

What AI provided: AI hinted that I should look for the [FLAGPART] entries in the server logs, identify the four unique pieces, ignore repeated pieces.

How I verified it: I assembled " academy{us3_y0urlinux_sk1lls_cedfa5fb}" by writing it down on paper and submitted it through my computer and CyLab accepted it.

What I learned: Server logs can expose sensitive information, and repeated pieces must be handled carefully.


Entry 3: Mod 26 Challenge

What I asked: I asked AI for help understanding the Mod 26 cryptography challenge.

What AI provided: AI gave me a hint about how ROT13 works, shifting each letter 13 places in the alphabet.

How I verified it: I decoded the message on paper again and got "academy{next_time_I'll_try_2_rounds_of_rot13_5c5f5b36}" which was correct.

What I learned: I learned that ROT13 is easy to reverse and shouldn't be used to protect sensitive information.


Example of how AI assisted me:

What happened - AI gave me hints during Log Hunt by helping me look for unique flag pieces and noting how they look different from the rest of the file. For Mod 26 AI gives me instruction on how ROT13 works, which helped me decode the message.

How I verified - I assembled the Log Hunt flag and Cylab accepted it. for Mod 26 I decoded the message on paper and compared my result.

What I learned - Hints help me solve challenges and understand the process myself, while getting the answers directly gives me less practice.


Entry 4: The Numbers Challenge

What I asked: I asked AI to check my answer to the The Numbers cryptography challenge.

What AI provided: AI helped me understand how numbers could correspond to letters, and I decoded the message myself.

How I verified it: I decoded the numbers myself using A = 1, B = 2, C = 3, and checked my answer with AI.

What I learned: Numbers can represent letters, and simple number codes are easy to decode when you recognize the pattern.



Entry 5: 13 Challenge

What I asked: I asked AI to check my answer to the 13 cryptography challenge.

What AI provided: AI helped verify my ROT13-decoded message.

How I verified it: I decoded the message myself and compared my result with AI's answer.

What I learned: ROT13 shifts letters by 13 places and is easy to reverse, so it should not be used to protect sensitive information.



Entry 6: Crack the Gate 1 Challenge

What I asked: I asked AI for help understanding the challenge's webpage source code.

What AI provided: AI helped me understand the ROT13-encoded developer comment, and I used the clue to investigate the hidden header.

How I verified it: I used the header in the challenge's login request and checked the response. The challenge returned the flag academy{brut4_f0rc4_0c4546d5}.

What I learned: Developers can accidentally expose hidden access methods in webpage source code. I also learned how to inspect code and test a clue in a practice challenge.



Example of How AI Assisted Me

What happened: AI helped me understand clues in The Numbers and 13 challenges and explained how to decode their messages. For Crack the Gate 1, AI helped me understand the hidden developer comment and test the header.

How I verified: I decoded the messages myself for The Numbers and 13, then compared my results with AI. For Crack the Gate 1, I checked the response returned by the challenge.

What I learned: AI is useful for explaining clues and checking my reasoning, but I should still attempt challenges myself and verify results rather than blindly trusting AI.
