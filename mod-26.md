Challenge Log: Mod 26
10/15/26

Category: Cryptography

What I did: Used ROT13 to decode the message in a file named "values.txt"

My reasoning: I recognized ROT13 from the challenge description. I shifted each letter 13 places in the alphabet and decoded the message on paper.

What I found: The decoded flag was: academy{next_time_I'll_try_2_rounds_of_rot13_5c5f5b36}

What I learned: ROT13 shifts each letter 13 places in the alphabet. Using ROT13 twice returns the original text.

Security lesson: ROT13 is not secure encryption because anyone with a piece of paper and knowldege of the alphabet can easily decode it. Additionally, ROT13 is easy to reverse, so it should not be used to protect sensitive information.